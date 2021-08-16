// Press tab to see functions







  var canvasX =700
  var canvasY =700

function setup() {
  createCanvas(canvasX, canvasY);
  background(150);
  c=0
  d = 10
  a = 0
  incircle = false
  index = false
  text1= [10,height-30]
  text2= [width-40,height-30]
  locked = true
  var inradius
  var x1
  var x2
  var y1
  var y2
  var savedcolour
 

  
  stroke('red')
  fill('red')
  slide = createSlider(1,30,5)
  slide.position(250,675)
  slide.style('width','100px')
  
 
  
  
  
  
  
  
 
}

function draw() {
  x1 = mouseX
  y1 = mouseY
  x2 = pmouseX
  y2 = pmouseY


  textSize(15)
  if (mouseIsPressed && mouseButton == LEFT) {
    
    stroke(c)
    stroke1 = slide.value()
    strokeWeight(slide.value())
    line(x1,y1,x2,y2)
    

    
  }
    
    noStroke()

    
    
    //buttons
    fill('red')
    rect(0,0,50,50)
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c='red'
      
    }
    fill('blue')
    rect(50,0,50,50)
    if (mouseX > 50 && mouseX < 100 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c='blue'
    }
    fill('lime')
    rect(100,0,50,50)
    if (mouseX > 100 && mouseX < 150 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c='lime'
      }      
  
    fill('yellow')
    rect(150,0,50,50)
    if (mouseX > 150 && mouseX < 200 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c='yellow'
    }
    
    fill('purple')
    rect(200,0,50,50)
    if (mouseX > 200 && mouseX < 250 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c='purple'
    }
    fill('pink')
    rect(250,0,50,50)
    if (mouseX > 250 && mouseX < 300 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c='pink'
    }
    fill(255)
    rect(300,0,50,50)
    if (mouseX > 300 && mouseX < 350 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c=255
    }
    fill('orange')
    rect(350,0,50,50)
    if (mouseX > 350 && mouseX < 400 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      c='orange'
    }
    fill('cyan')
    rect(400,0,50,50)
    if (mouseX > 400 && mouseX < 450 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
     c = 'cyan'
    }
  
    //random colour
    fill('red')
    rect(450,0,25,25)
    fill('green')
    rect(475,0,25,25)
    fill('blue')
    rect(450,25,25,25)
    fill('yellow')
    rect(475,25,25,25)
    if (mouseX > 450 && mouseX < 500 && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      
      
      
      c = color(random(0,255),random(0,255),random(0,255))
      index = true
        
      
    }
   // save random colour
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    fill(0)
    rect(500,0,50,50)
    if (mouseX < 550 && mouseX > 500 && mouseY < 50 && mouseY > 0 && mouseIsPressed && mouseButton == LEFT) {
      
      c = 0 
      
      
      
      
    }
  
  
    //eraser
    fill(125)
    ellipse(575,25,50,50)
    fill(0)
    textAlign(CENTER)
    text('eraser',575,25)
    inradius = dist(mouseX,mouseY,575,25)
    if (inradius < 25){
      c = 150
    }
    
     
      
    
  
  
    
  
    
  
    //clear
    fill(0)
    rect(width-50,0,50,50)
    textAlign(LEFT)
    fill(255)
    text('clear \ncanvas',width-50,15)
    if (mouseX > width-50 && mouseX < width && mouseY > 0 && mouseY < 50 && mouseIsPressed && mouseButton == LEFT){
      background(150);
      
    }    
    //brush
    
    
    fill(255)
    circle(width-25,height-30,60)
    fill(0)
    text('reset \nbrush', text2[0],text2[1])
    brush2 = dist(width-25,height,mouseX,mouseY)
    if (brush2 < 60) {
      if (mouseIsPressed && mouseButton === LEFT){
        slide.value(5)
      }
      
      
      
  
      
    
    }
  
  
}
function keyPressed(){
  
  if (keyCode === 9){
    textAlign(CENTER)
    fill(0)
    textSize(20)
    text('1. Select colours from the coloured buttons above\n 2. The multi-coloured button can be clicked to generate a random colour\n 3. Eraser button lets you erase\n 4. Click "clear canvas" to reset the canvas\n 5. Use reset colour to reset the colour to the default\n 6. Slider can be used to change brush thickness\n 7. Click "reset brush" to reset the brush thickness to the default',350,350)
    textSize(15)
  }
}

