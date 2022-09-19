        float t;
        PImage space;
        static final int lines = 10;
        
        void setup(){
        size(1000,100);
          space =loadImage("/Users/daryooshardalan/vscode/puzzlearcade-main/data/space.png"); 
        }
        
        void draw(){
         image(space,0,0);
         strokeWeight(2); 
         translate(width/2,height/2);
         for(int i = 0; i < lines; i++){
           stroke(255,200,0);
         line(x(t+i)-500,y(t+i), x2(t+i)-500,y2(t+i));
          stroke(240,120,0);
          
          line(x(t+i)-250,y(t+i), x2(t+i)-250,y2(t+i));
          stroke(200,40,0);
           line(x(t+i),y(t+i), x2(t+i),y2(t+i));
         
           stroke(200,60,40);
         line(x(t+i)+250,y(t+i), x2(t+i)+250,y2(t+i));
           stroke(140,0,80);
          line(x(t+i)+500,y(t+i), x2(t+i)+500,y2(t+i));
        
         }
         //point(x(t),y(t));
          //point(x2(t),y2(t));
        
         t += .25;
         
         fill(#FF03B4);
         textSize(100);
         textAlign(CENTER);
        //text("Puzzle Arcade",0,35);
        }
        
        float x(float t) {
          return sin(t / -5) * 80 + sin(t/10) * sin(t);
        }
        
        float y(float t) {
          return cos(t / 10) * cos(t/-5) * 15 + cos(1);
        }
        
        float x2(float t) {
          return sin(t / 10) * 100 + sin(t/5) * 75;
        }
        
        float y2(float t) {
          return sin(t / 10) * 100 + sin(t/5) * 50 + cos(1);
        }
