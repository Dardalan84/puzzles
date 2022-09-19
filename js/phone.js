let img;
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;
let beep0, beep1, beep2, beep3, beep4, beep5, beep6, beep7, beep8, beep9;

// function phoneState0() {
//     background(0);
//     image(img, 0, 0);
//     let s = "Welcome! Navigate the phone network to reach the CEO. Don't get caught by security! Dial 0 to hang up";
//     text(s, 250, 170, 140, 80);
//     clicked1 = false;
//     clicked2 = false;
//     clicked3 = false;
//     clicked4 = false;
//     clicked5 = false;
//     clicked6 = false;
// }

function setup() {

    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    img = loadImage("js/businessphone.png");
    beep0 = loadSound('js/data/PhoneTones/Phone0.m4a')
    beep1 = loadSound('js/data/PhoneTones/Phone1.m4a')
    beep2 = loadSound('js/data/PhoneTones/Phone2.m4a')
    beep3 = loadSound('js/data/PhoneTones/Phone3.m4a')
    beep4 = loadSound('js/data/PhoneTones/Phone4.m4a')
    beep5 = loadSound('js/data/PhoneTones/Phone5.m4a')
    beep6 = loadSound('js/data/PhoneTones/Phone6.m4a')
    beep7 = loadSound('js/data/PhoneTones/Phone7.m4a')
    beep8 = loadSound('js/data/PhoneTones/Phone8.m4a')
    beep9 = loadSound('js/data/PhoneTones/Phone9.m4a')
    background(200);

    text("CLICK HERE TO PROCEED", 230, 20)
    image(img, width / 2, height / 2);

}

function draw() {
    imageMode(CENTER);
}

function phoneState0() {
    background(0);
    image(img, width / 2, height / 2);
    let s = "Welcome! Navigate the phone network to reach the CEO. Don't get caught by security! Dial 0 to hang up";
    text(s, 250, 170, 140, 80);
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
}

function phoneState1() {
    background(0);
    fill(0);
    image(img, width / 2, height / 2);
    let s = "Reception                    Office 101                   Please contact HR";
    text(s, 250, 190, 140, 60);
}

function phoneStateWin() {
    background(0, 0, 255);
    image(img, width / 2, height / 2);
    let s = "Executive Director           Office 500                   Password: synergy";
    text(s, 250, 190, 140, 60);
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
}

function phoneState2() {
    background(0);
    image(img, width / 2, height / 2);
    let s = "Human Resources    Office 240                   Contact Marketing";
    text(s, 250, 190, 140, 60);
}

function phoneState3() {
    background(0);
    image(img, width / 2, height / 2);
    let s = "Marketing Director           Office 303                    Call R&D";
    text(s, 250, 190, 140, 60);
}

function phoneState4() {
    background(0);
    image(img, width / 2, height / 2);
    let s = "Research and Dev   Office 409                    Take it to Leadership";
    text(s, 250, 190, 140, 60);
}

function phoneStateDie() {
    background(255, 0, 0);
    image(img, width / 2, height / 2);
    let s = "Security Director            Office 131                   Busted! Hang up";
    text(s, 250, 190, 140, 60);
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
}

function mousePressed() {
    if ((mouseX > 425 && mouseX < 495 && mouseY > 165 && mouseY < 195) && (clicked1 == false)) { //actual values may differ
        phoneState1();
        clicked1 = true;

    } else if ((mouseX > 425 && mouseX < 495 && mouseY > 205 && mouseY < 235) && (clicked4 == true)) {
        phoneStateWin();

    } else if ((mouseX > 425 && mouseX < 495 && mouseY > 245 && mouseY < 275) && (clicked1 == true)) {
        phoneState2();
        clicked2 = true;

    } else if ((mouseX > 425 && mouseX < 495 && mouseY > 285 && mouseY < 315) && (clicked3 == true)) {
        phoneState4();
        clicked4 = true;

    } else if (mouseX > 425 && mouseX < 495 && mouseY > 325 && mouseY < 355) {
        phoneStateDie();

    } else if ((mouseX > 425 && mouseX < 495 && mouseY > 365 && mouseY < 395) && (clicked2 == true)) {
        phoneState3();
        clicked3 = true;

    } else if (mouseX > 310 && mouseX < 340 && mouseY > 380 && mouseY < 420) {
        phoneState0();
    } else if (mouseX > 10 && mouseX < 590 && mouseY > 10 && mouseY < 40) {
        phoneState0();
    }

    if (mouseX > 310 && mouseX < 340 && mouseY > 380 && mouseY < 410) {
        beep0.play()
    }


    if (mouseX > 310 && mouseX < 340 && mouseY > 345 && mouseY < 375) {
        beep8.play()
    }

    if (mouseX > 310 && mouseX < 340 && mouseY > 315 && mouseY < 340) {
        beep5.play()
    }

    if (mouseX > 310 && mouseX < 340 && mouseY > 280 && mouseY < 305) {
        beep2.play()
    }

    if (mouseX > 275 && mouseX < 300 && mouseY > 345 && mouseY < 375) {
        beep7.play()
    }

    if (mouseX > 275 && mouseX < 300 && mouseY > 315 && mouseY < 340) {
        beep4.play()
    }

    if (mouseX > 275 && mouseX < 300 && mouseY > 280 && mouseY < 305) {
        beep1.play()
    }

    if (mouseX > 345 && mouseX < 375 && mouseY > 345 && mouseY < 375) {
        beep9.play()
    }

    if (mouseX > 345 && mouseX < 375 && mouseY > 315 && mouseY < 340) {
        beep6.play()
    }

    if (mouseX > 345 && mouseX < 375 && mouseY > 280 && mouseY < 305) {
        beep3.play()
    }


}

function keyPressed() {
    if (key == '0') {
        phoneState0();
    }
}


