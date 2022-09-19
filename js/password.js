let counter = 0;
let badcount = 0;
let rating = 0;
let score = 0;
let size = 10;
let starbackground;
let startbackground;
let winbackground;
let losebackground;
let passwords = ['badapple', 'Apple1999', '@pR1l6-K4', 'Brain231', 'brain', 'password', 'He770-ki11y', 'Qwerty', 'Pirate-booty$100', 'Tree33', 'Read-books91', 'itsasecret', 'Jackolantern31', 'Here&There22', 'MyBirthday1984', '@lien7-01', '9w3R7y@aol', '1l0vE@ppl-s', 'H0u53-Par7y', 'Pfi87Hu', 'budgetsecurity', '9-7!HNtR', 'icecream', 'repeeter007', '1234red' ];
let gamestate = 0;
let rank = ['1', '3', '5', '3', '1','2', '5', '1', '4', '2', '4', '1', '3', '4', '3', '5', '5', '5', '5', '3', '1', '5', '1', '3', '2'];
let x = 10;

function preload() {
   starbackground = loadImage("js/data/spacebackground.png");
   startbackground = loadImage("js/data/startbackground.png");
   winbackground = loadImage("js/data/winbackground.png");
   losebackground = loadImage("js/data/losebackground.png");
  }

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    textFont('Helvetica');
    
  //  background(255,0,0);
    rect(0, 0, width, height);

}

function draw() {
    image(startbackground,0,0);
   

    x+=.2;
    size += .1;
    if(gamestate==1){
        image(starbackground,0,0);
        textAlign(CENTER);
        textSize(size);
        fill(250,x);
        
      
    text(passwords[counter], width/2, height/2);
    textSize(28);
    if(score>=rank.length-3){
    //     let div = createDiv('this is some text');
    // div.id('solvedmessage');
        counter = 0;
        score = 0;
        gamestate = 2;
    } else if (counter == rank.length && score < rank.length-3){
        counter = 0;
        score = 0;
        text('you lose',300,400);
        gamestate = 3;
    }
    
    }else if (gamestate==2){
        image(winbackground,0,0);
       badcount = 0;

    } else if (gamestate==3){
        image(losebackground,0,0);
       badcount = 0;
    }
   
   if(badcount == 1){
       fill(250);
       ellipse(50,50,50,50);
       textSize(44);
       fill(250,0,0);
    text("X",50,60);
   } else if (badcount == 2){
    fill(250);
    ellipse(50,50,50,50);
    fill(250,0,0);
    textSize(44);
    text("X",50,60);
    fill(250);
       ellipse(120,50,50,50);
       fill(250,0,0);
       text("X",120,60);
   } else if(badcount == 3) {
gamestate = 3;
counter = 0;
score = 0;
badcount = 0;
   };
   

  }

   
function keyPressed() {
    if(key===rank[counter]){
        counter += 1;
        score += 1;
       } else if(key!=rank[counter]) {
    badcount +=1;
    } else {
        counter += 1;
        score += 0;
    }
       
    
    size = 5;
    x = 0;
   // image(startbackground,0,0);
        console.log(score);
        console.log(counter);
       // checkScore();
    }

function mousePressed(){
    gamestate = !gamestate;
    if(gamestate == 2 || gamestate == 3){
        gamestate=0;
        counter = 0;
        score = 0;
    }
   badcount = 0;
    counter = 0;
    score = 0;
    size=10;
    background(255);
}