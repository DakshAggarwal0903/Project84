canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1wid = 120;
car1height = 70;
car1img = "car1.png"
car1_x = 10;
car1_y = 10;
background_img = "Bg.jpg"

car1wid = 120;
car1height = 70;
car2img = "car2.png"
car2_x = 10;
car2_y = 100;
function screenload(){
    nimg = new Image();
    nimg.onload = uploadbg;
    nimg.src = background_img;
    nimgc1 = new Image();
    nimgc1.onload = uploadcar1;
    nimgc1.src = car1img;
    nimgc2 = new Image();
    nimgc2.onload = uploadcar2;
    nimgc2.src = car2img;
  }
  function uploadbg(){
    ctx.drawImage(nimg,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(nimgc1,car1_x, car1_y ,car1height, car1wid);
}
function uploadcar1(){
    ctx.drawImage(nimgc2, car2_x, car2_y, car2height, car2wid);
}
window.addEventListener("keydown",kdn);
function kdn(e){
    keypress = e.keyCode;
    console.log(keyPressed);
if(keyPressed == '38'){
    up();
    console.log("Up arrow key");
}
if(keyPressed == '40'){
    down();
    console.log("Down arrow key");
}
if(keyPressed == '37'){
    left();
    console.log("Left arrow key");
}
if(keyPressed == '39'){
    right();
    console.log("Right arrow key");
}
if(keyPressed == '87'){
    c2up();
    console.log("Up arrow key");
}
if(keyPressed == '83'){
    c2down();
    console.log("Down arrow key");
}
if(keyPressed == '65'){
    c2left();
    console.log("   ");
}
if(keyPressed == '68'){
    c2right();
    console.log("D key");
}
}
