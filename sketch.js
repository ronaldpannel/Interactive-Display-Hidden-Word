let pic;
let rows;
let cols;
let rSize = 5;
let cSize = 4;
let rects = [];
let bright;
function preload() {
  pic = loadImage("rosieINameImage.png");
}

function setup() {
  createCanvas(800, 300);

  cols = width / cSize;
  rows = height / rSize;

  for (let i = 0; i < cols; i++) {
    rects[i] = [];
    for (let j = 0; j < rows; j++) {
      let c = pic.get(i * cSize, j * rSize);
      if (brightness(c) == 0) {
        bright = true
      } else {
        bright = false;
      }
    
      rects[i][j] = new Rect(i * cSize, j * rSize, bright);
    }
  }
}

function draw() {
  background(220);
  image(pic, 0, 0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rects[i][j].draw();
    }
  }
  pic.resize(800, 300);
}

function windowResized() {
  resizeCanvas(800, 300);
}
