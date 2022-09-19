let slider;
var stars = [];
var letters = [];
let sound;
var lettersXSpeed = .033;
function setup() {
  //  sound = loadSound('slider/data/boing.m4a');
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');


    // slider = createSlider(0, 6, 0, 0.025);
    // slider.position(500, 250);
    // slider.style('width', '180px');
    // slider.style('text-align', 'center');
    for (var i = 0; i < 160; i++) {
        stars[i] = new Star();
    }
    for (var j = 0; j < 14; j++) {
        letters[j] = new LettersA();
    }
    

}


function draw() {
    let val = dist(mouseX, mouseY, 300, 350) / 20;
    let valy = dist(mouseX, mouseY, 100, 150) / 20;
    let prox = val * -1 + 10;
    let proxy = valy * -1 + 10;

 


    rectMode(CENTER);
  
    fill(0, 225, 255, proxy * 0.75);
    text("aeoda", mouseX, mouseY-20);
    fill(255, 68, 0, prox);
    for (var j = 0; j < letters.length; j++) {
      
        letters[j].show();
       letters[j].move();
        letters[j].reverse();
        
    }

    if (prox < 2 && proxy < 2) {
        background(0);
        fill(0);
        
    }

    noFill();
    for (var i = 0; i < stars.length; i++) {
        stars[i].draw();
     
    }

    
        fill(255, 0, 255);
    ellipse(298, 346, 15, 15)
    fill(0);
    ellipse(300, 347, 14, 14);
  
    
   
    fill(20, 10, 180);
    ellipse(97, 148, 25, 25);
    fill(0);
    ellipse(100, 150, 20, 20);
   
    // setTimeout(moon,6000);
    // setTimeout(moonB,3000);

    console.log(val, prox, proxy)
}

 

class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(.5, 4);
    }
    draw() {
        fill(random(180, 255));
        noStroke();
        ellipse(this.x, this.y, this.size, this.size)
    }
}

class LettersA {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.xspeed = .033;
        this.letters = ("dmrn");
        this.digit = this.letters[floor(random() * this.letters.length)];


    }
    show() {
        //  fill(255);
        textSize(16);
        textAlign(CENTER, CENTER);
        text(this.letters, this.x, this.y);
    }
    move(){
        this.x = this.x + this.xspeed;
        // if(this.x > width || this.x <= 0){
        //     this.x *= -1;
        // }
    }

    reverse(){
        if(this.x >= width || this.x <= 0){
            this.xspeed *= -1;
        } 
    }
}
