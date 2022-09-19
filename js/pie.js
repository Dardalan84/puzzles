class Pie {
    constructor(x , y){
        this.alphabet = "ABCDEFGHIIJKLMNOPQRSTUVWXYZ      MITNICKMITNICK";
        this.x = x;
        this.y = y;
        this.digit = this.alphabet[floor(random()* this.alphabet.length)];
        this.yspeed = 0;
    }

    show(){
        noFill();  
        stroke(150,0,200); 
        strokeWeight(4); 
        circle(this.x,this.y,30,30);
       fill(255);
        textSize(30);
        textAlign(CENTER,CENTER);
        text(this.digit, this.x, this.y);
    }

    move(){
        this.y = this.y + this.yspeed;
        this.yspeed = this.yspeed + 0.025;
    }

    stop(){
        this.y = this.y * 0;
    }
    
    hide(){
        circle(this.x,this.y,30,30);
        fill(255);
    }
}

