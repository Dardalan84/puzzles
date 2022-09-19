const message = "Jil lna kvbv zhm Ihmevrqk cgcgkr enr gcbhzrlg vmbevgdj bg Odrlifn? vaafvurl: odrlifn"
let x = 600;
let y = 535;
let img;

function preload() {
img = loadImage("js/data/news.png")
}

function setup(){
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
   
    
   


}

function draw(){
    background(80,100,255);
    fill(200,96);
    rect(40,145,120,300);
    rect(240,145,120,296);
    rect(445,145,120,296);
    image(img,0,20);
    fill(230);
    rect(0,500,width,50);
    fill(0);
    textSize(38);
    text(message,x,y);
    x = x - 2;
    if(x<=-1450){
        x=600;
    }
    clock();
   
}

function clock()
{
 fill(240);
  //textFont(clockFont);
  //textAlign(CENTER, CENTER);
  textSize(28);
  let Hour = hour();
  let min = minute();
  let secs = second()
  let noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, 25, 120); 
}