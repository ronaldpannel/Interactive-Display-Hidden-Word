class Rect {
  constructor(x, y, isBlack) {
    this.x = x;
    this.y = y;
    this.isBlack = isBlack;
    this.c = 0;
    this.randomColor = floor(random(7))
  }
  draw() {
    strokeWeight(0.5);
    if (this.isBlack == true) {
      this.c = 0;
    } 
    this.hover()
    fill(this.c);
    rect(this.x, this.y, cSize, rSize);
  }
  hover() {
    let colors = ['#abcd5e', '#14976b', '#2b67af', '#62bde', '#f589a3', '#ef562f', '#fc8405', '#f9d531']
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < 100) {
      if (this.isBlack == true) {
        this.c = color(colors[this.randomColor]);;
      } else{
        this.c = 0

      }
    }
    // if(this.c > 0){
    //     this.c -= 10
    // }
  }
}
