function setup() {
  createCanvas(1429, 764);
  frameRate(12);
  background(0);
  var tw = 90;
  var th = 53;
  var n = 0
}


var array1 = [[250, 246, 237], [252, 249, 209], [249, 241, 133],
              [251, 244, 163], [251, 241, 121], [254, 213, 105],
              [253, 230, 113], [254, 217, 108], [248, 156, 87],
              [254, 212, 112], [252, 180, 92], [245, 135, 85],
              [245, 134, 85], [242, 102, 63], [229, 77, 49],
              [243, 114, 77], [230, 82, 50], [216, 71, 46],
              [230, 140, 104], [227, 115, 80], [202, 67, 45],
              [237, 161, 122], [210, 104, 73], [168, 58, 37],
              [202, 137, 104], [173, 75, 55], [147, 47, 36],
              [193, 156, 128], [180, 132, 107], [121, 53, 43],
              [197, 181, 153], [166, 131, 107], [91, 42, 33],
              [209, 167, 136], [195, 183, 168], [86, 66, 57],
              [202, 199, 186], [141, 133, 122], [69, 60, 50],
              [214, 211, 202], [171, 165, 154], [78, 72, 66],
              [214, 211, 202], [171, 165, 154], [78, 72, 66]];
var colors = array1;


function draw() {
  var s = second();
    background(0, 2);
    noStroke();
    textFont("Avenir");
    textSize(40);
    fill(255);
    text("click to change colors", 1000, 700);
  var th = 8;
  for (var x = 1; x < 40; x++) {
  noFill();
  stroke(random(colors));
  polygon(mouseX , mouseY , x * th, 6);
}

}

function mousePressed() {
  var array2 = [[random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)],
                [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)]];
  var array3 = [[random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)],
                [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)], [random(255), 0, random(255)]];
  var array4 = [[random(255), random(255), 0], [random(255), random(255), 0], [random(255), random(255), 0], [random(255), random(255), 0], [random(255), random(255), 0],
                [random(255), random(255), 0], [random(255), random(255), 0], [random(255), random(255), 0], [random(255), random(255), 0], [random(255), random(255), 0]];
  var pallette = random([array2, array3, array4]);
  colors = pallette;

}






function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
