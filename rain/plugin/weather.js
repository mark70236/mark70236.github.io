var mainCanvas = document.getElementById("myCanvas")
  , mainContext = mainCanvas.getContext("2d")
  , circles = []
  , requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
  , rainDrops = mainCanvas.getAttribute("rainDrops")
  , wind = mainCanvas.getAttribute("windPower")
  , direction = mainCanvas.getAttribute("direction");
function Circle(a, b, c, d) {
    this.speed = b;
    this.xPos = c;
    this.yPos = d;
    this.opacity = -.03 + a / 10;
    this.counter = 0
}
Circle.prototype.update = function() {
    this.counter += this.speed;
    this.yPos + this.counter > mainCanvas.height && (this.xPos = Math.round(Math.random() * mainCanvas.width * wind + mainCanvas.width),
    "right" == direction ? this.xPos = -1 * Math.round(Math.random() * mainCanvas.width * wind + 25) : "left" != direction && (this.xPos = Math.round(Math.random() * mainCanvas.width + 1)),
    this.yPos = -1 * Math.round(Math.random() * mainCanvas.height * 2 + 1),
    this.counter = 0);
    mainContext.beginPath();
    1 > wind && (wind = 1);
    "left" == direction ? moveParticules(this, -1, 7, 10,
    11, 5) : "right" == direction ? moveParticules(this, 1, 7, 10, 11, 5) : (wind = 0,
    moveParticules(this, 1, 0, 15, 3, 20));
    mainContext.fillStyle = "rgba(220, 220, 220," + this.opacity.toFixed(2) + ")";
    mainContext.fill()
}
;
function moveParticules(a, b, c, d, e, f) {
    mainContext.moveTo(a.xPos + a.counter * wind * b, a.yPos + a.counter);
    mainContext.bezierCurveTo(a.xPos + a.counter * wind * b + c * b, a.yPos + a.counter + d, a.xPos + a.counter * wind * b + e * b, a.yPos + a.counter + f, a.xPos + a.counter * wind * b, a.yPos + a.counter)
}
function drawCircles() {
    for (var a = 0; a < rainDrops; a++) {
        var b = Math.round(Math.random() * mainCanvas.width * wind + mainCanvas.width);
        "right" == direction ? b *= -1 : "left" != direction && (b = Math.round(Math.random() * mainCanvas.width * wind + 1));
        var c = -1 * Math.round(Math.random() * mainCanvas.height * 2 + 50)
          , d = 5 + 2 * Math.random()
          , e = Math.floor(10 * Math.random() + 1)
          , b = new Circle(e,d,b,c);
        circles.push(b)
    }
    draw()
}
var globalID;
function draw() {
    mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    for (var a = 0; a < circles.length; a++)
        circles[a].update();
    globalID = requestAnimationFrame(draw)
}
drawCircles();
