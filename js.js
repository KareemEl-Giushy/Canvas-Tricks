// ========= Variables ==============
var canvas = document.querySelector('canvas');
// Canvas Width And Height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvasWidth = canvas.width,
    canvasHeight = canvas.height;
// Start Drawwing
var c = canvas.getContext('2d');

// c.fillStyle = "rgba(255, 0, 0, .5)";
// c.fillRect(500, 500, 200, 200);
//
// c.beginPath();
// c.moveTo(0, 500);
// c.lineTo(200, 200);
// c.lineTo(200, 500);
// c.lineTo(0, 500);
// c.strokeStyle = "black";
// c.stroke();
//
// for (var i = 0; i < 20000; i++){
//   c.beginPath();
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.stroke();
// }
function circle(x, y){
  this.draw = function (){
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.stroke();
  }
}
var circle = new circle(200,200);
var x         = 300,
    y         = 300,
    radius    = 100,
    xd = 5;
    yd = 5;
function animate (){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvasWidth, canvasHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();
  if (x + radius > canvasWidth || x - radius < 0){
    xd = -xd;
  }
  if (y + radius > canvasHeight || y - radius < 0) {
    yd = -yd;
  }
  x = xd + x; // x += xd
  y = yd + y;
}
animate();
