//This is my sketch file for my portfolio homepage 

let canvas;

let rt = 20;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight); 
    canvas.position(0, 0); //positions sketch at top left
    canvas.style('z-index', '-1'); //sets the sketch file back
    frameRate(6);
 
}


function draw(){

   background(250, 240, 250, 10);   

    noStroke();
    
    fill(random(255),random(255),random(255), random(255) );
    rect(random(0,width), random(0, width), random(100), random(172), random(rt));

    fill(random(255),random(255),random(255), random(255) );
    rect(random(0, width), random(0, width), random(100), random(172), random( rt));
    
    fill(random(255),random(255),random(255), random(255) );
    rect(random(0, width), random(300, width), random(100), random(172),random(rt))
    
    fill(random(255),random(255),random(255), random(255) );
    rect(random(0, width), random(00, width), random(100), random(172),random(rt));

    
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

