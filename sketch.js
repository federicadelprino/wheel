function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  
  
 // frameRate(120);
  
   background(250);
   
}

function draw() {
  
 translate(250,250); 

 // rotate(frameCount*3)
  
 
  stroke(lerpColor(color('#b271dd'), color('#efef77'), frameCount/120));

push();
 line(250,0,cos(frameCount*3)*250,sin(frameCount*3)*250);
 
 line(-250,0,cos(frameCount*3)*250,sin(frameCount*3)*250);
 
 line(0,200,cos(frameCount*3)*-150,sin(frameCount*3)*-150); 
 
 line(0,-200,cos(frameCount*3)*-150,sin(frameCount*3)*-150);
 
pop(); 


//inizio cerchi centrali 
stroke(lerpColor(color('#efef77'), color('#b271dd'), frameCount/120)); 

push(); 
 ellipse(150,0,cos(mouseX*2)*-80,sin(mouseY*2)*-80);
 
 ellipse(0,0,cos(mouseX*3)*-80,sin(mouseY*3)*-80);

 ellipse(-150,0,cos(mouseX*4)*-80,sin(mouseY*4)*-80);
 
pop();

push();
  noStroke();
  textSize(21);
text("Move the cursor", -70, 200);
text("to emerge from the nest", -110, 220);
fill(0, 102, 153);
pop();


if (frameCount=360/3){
 noLoop;
  }
  

 // if (frameCount == 120) {
  // noLoop();
 // }

}