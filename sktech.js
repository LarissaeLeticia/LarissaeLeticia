function setup() {
    createCanvas(800, 800);
    background ("black")
  }
  
  function draw() {
    rect(0,0,100,100)
    fill("purple")
    stroke("black")
    if(mouseIsPressed){
      rect (mouseX,mouseY,10,10)}}