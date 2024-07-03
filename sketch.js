let gantiWarna = false;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background("orange");
  orbitControl();

  if (gantiWarna === true) {
    let warna = color("skyblue");
    ambientLight(warna);
  }

  ambientLight(color("red"));
  sphere(110);
  torus(140, 20);
  cylinder(110);
}

function doubleClicked() {
  gantiWarna = true;
}
