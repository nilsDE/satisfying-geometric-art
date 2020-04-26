let canvas;
let elements = [];
let offsetSlider;
let sliderValue;

// Settings
let animationStarted = false;

// Temporary points for new rectangles
let tmpPoints = [];

function setup() {
  canvas = createCanvas(1220, 802);
  canvas.parent("sketch-holder");

  offsetSlider = createSlider(1, 50, 4);
  offsetSlider.position(1250, 20);

  // Buttons
  document.querySelector(".start-animation").onclick = () => {
    background(240);
    animationStarted = true;
  };
  document.querySelector(".clear-all").onclick = () => {
    background(240);
    animationStarted = false;
    elements = [];
  };
  document.querySelector(".insert-example").onclick = () => {
    offsetSlider.value(4);
    insertExample(offsetSlider.value());
  };
  // document.querySelector(".insert-overlay-example").onclick = () => {
  //   offsetSlider.value(12);
  //   insertOverlayExample(offsetSlider.value());
  // };
  document.querySelector(".insert-overlay-example-2").onclick = () => {
    offsetSlider.value(8);
    insertOverlayExample2(offsetSlider.value());
  };
  document.querySelector(".insert-satisfying").onclick = () => {
    offsetSlider.value(6);
    insertSatisfyingExample(offsetSlider.value());
  };
  document.querySelector(".create-new-shape").onclick = () => {
    elements.push(new Shape(tmpPoints, false, offsetSlider.value()));
    tmpPoints = [];
  };

  // Draw own shapes
  canvas.mousePressed(() => tmpPoints.push({ x: mouseX, y: mouseY }));
  background(240);
}

function draw() {
  if (!animationStarted) {
    background(240);
    push();
    stroke(82);
    line(0, mouseY, width, mouseY);
    line(mouseX, 0, mouseX, height);
    pop();
  }
  for (let point of tmpPoints) {
    ellipse(point.x, point.y, 2);
  }

  for (let element of elements) {
    noFill();
    element.drawRect();
  }

  if (animationStarted) {
    for (let element of elements) {
      element.update();
    }
  }
}
