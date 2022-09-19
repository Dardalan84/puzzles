let pies = [];
let plate;
let digitsDiv;
let digits = "MY NAME IS ";
let answer = "KEVIN MITNICK";
let answerCounter = 0;
let wrongCounter = 0;


function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
   pie = new Pie(200,200); 
    plate = new Plate(200, 50)
    digitsDiv = createDiv(digits);
    digitsDiv.style('font-size', '42pt');
    digitsDiv.style('background-color', 'lightgrey');
    digitsDiv.style('width', '800px');
    digitsDiv.style('text-align', 'center');
    digitsDiv.style('margin', 'auto');
}
  
function draw() {
    background(0);
    if(random(1) < 0.05){
    pies.push(new Pie(random(width),random(-100,-15)));
}

for (let pie of pies) {
    pie.show();
    pie.move();
    fill(255);
 }

 for(let i = pies.length - 1; i >= 0; i--){
    if(wrongCounter >= 3){
       //You lose the game
        digits = "MY NAME IS ";
        answerCounter = 0;
        wrongCounter = 0;
    } else if (plate.catches(pies[i])){
        let digit = pies[i].digit;
        let correctDigit = answer.charAt(answerCounter);
    if(correctDigit == digit) {
        console.log('great');
        digits += digit;
        answerCounter++;
    } else{
        console.log('poo');
        wrongCounter++;
        console.log(wrongCounter);
        }
        digitsDiv.html(digits);
        pies.splice(i, 1);
 } else if(pies[i].y > height) {
        pies.splice(i, 1);
        }
    }

    if(answerCounter >= 13) {
        //You win the game
        digits = "All your base belong to us"; 
        answerCounter = 0;
        wrongCounter = 0;   
    }

   
   // console.log(pies.length);
   
    plate.show();
    fill(0);
    plate.x = mouseX;
  }