//This is my sketch file for my portfolio homepage 

let canvas;

let rt = 20;
let move = 10;

////////////////////////
//Circle variables

let diam = 0.0;

/////////////////////

function setup(){
    canvas = createCanvas(windowWidth, windowHeight); 
    canvas.position(0, 0); //positions sketch at top left
    canvas.style('z-index', '-1'); //sets the sketch file back
    //frameRate(60);
 
}


function draw(){

   background(200, 200, 200, 100);   


    //not sure why this isnt working
    /*
    if(frameCount > 0){
	boxes();
    }
    if(frameCount < 1000){
    	circles();
    }
    if(frameCount < 2000){
	squares();
    }
    if(frameCount < 3000){
	drawCircle(width/2, height/2, 700 + diam);
    }
    */
 stroke(200, 200, 0);
    	drawCircle(width/2, height/2, 700 + diam);

    stroke(0,0, 200, 10);
    	drawCircle(width/2, height/2, 700 + diam);


    
    diam = diam + 1;

    console.log(frameCount);
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}



function boxes(){

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


function circles(){

    noFill()

    for(let i = 0; i < width-100; i += 100){
	for(let j = 0; j < height+ 300; j += move){
    strokeWeight(1);
	    stroke(0, 0, 255);
	ellipse(i+60, j-100, 100, 100);
	}
    }

    move = move + 0.01;


}


function squares(){

    let x, y;
    let w, h;
    let segments = 10;
    let num = 60;

    w = random(-num, num);
    h = random(-num, num);
    let rx = random(0, 1000);
    let ry = random(0, 1000);

    for(let i = 0; i < width; i += 100){

	noFill();
	strokeWeight(0.1);
	stroke(22);
	rect(i, height/2, w, h);
	stroke(0, 0, 200);
	rect(i, 100, rx, ry);
    }

}


function drawCircle(x, y, d){
    noFill();
    strokeWeight(1);
    ellipse(x, y, d);
    if(d > 2){
	drawCircle(x, y, d * 0.5);
	drawCircle(x - d * 0.5, y, d * 0.5)
	drawCircle(x + d * 0.5, y, d * 0.5)
    } 
}
