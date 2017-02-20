/**
*Alexandra Zhao<yz3514.bard.edu>
*2017/2/20
*IDEA135
*Interactive Avatar
*I did this sketch by myself
*My privious sketch focused on the color and coordinations. This time, i added more random things which can be tested by pressing the keyboard, clicking the mouse and moving the mouse. These variables are more reliable on individual's behavior. Moreover, the different ways of typing can change the alphabets and its mode. 
*/

function setup() {
createCanvas(500,500);
strokeWeight(8)  


}

function draw() {
  background(200);
    
    for (var x=20;x<width;x+=20){
            var mx=mouseX/10;
            var offsetA= random(-mx,mx);
            var offsetB= random(-mx,mx);
            line(x+offsetA,20,x-offsetB,100);
        
        }
    for (var x=200;x<width;x+=20){
            var mx=mouseY/10;
            var offsetA= random(mx,-mx);
            var offsetB= random(mx,-mx);
            line(x+offsetA,20,x-offsetB,100);
        
        }  


fill(255,0,0);
ellipse(10,10,20,20);
fill(0,255,0);
ellipse(10,490,20,20);
    fill(0,0,255);
ellipse(490,10,20,20);
    fill(100,100,233);
ellipse(490,490,20,20);
    if(mouseIsPressed) {
    fill(0);} else{fill(200);}
        ellipse(mouseX, mouseY,pmouseX,pmouseY);
    fill(200,30,50);
    rect(30,30,50,50);
    fill(50,50,50);
    rect(420,420,50,50);
    fill(0,200,0);
    rect(30,420,50,50);
    fill(233,233,233);
    rect(420,30,50,50);
    line(100,100,400,400);
    if (keyIsPressed) {
        line(100,400,400,100);}
    
    text(key,235,265);
    textSize(80);
    
   
    
    
 
   
   
   
        
}
