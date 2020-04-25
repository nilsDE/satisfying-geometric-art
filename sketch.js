let canvas;
let elements = [];
let offsetSlider;
let sliderValue;

// Settings
let animationStarted = false;

// Temporary points for new rectangles
let tmpPoint1;
let tmpPoint2;

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
  document.querySelector(".insert-overlay-example").onclick = () => {
    offsetSlider.value(12);
    insertOverlayExample(offsetSlider.value());
  };
  document.querySelector(".insert-overlay-example-2").onclick = () => {
    offsetSlider.value(8);
    insertOverlayExample2(offsetSlider.value());
  };

  canvas.mousePressed(() => (tmpPoint1 = { x: mouseX, y: mouseY }));
  canvas.mouseReleased(() => {
    tmpPoint2 = { x: mouseX, y: mouseY };
    elements.push(new Rectangle(tmpPoint1, tmpPoint2.x - tmpPoint1.x, tmpPoint2.y - tmpPoint1.y, false, offsetSlider.value()));
    tmpPoint1 = null;
    tmpPoint2 = null;
  });

  background(240);
}

function draw() {
  if (tmpPoint1) {
    push();
    background(240);
    stroke(255, 0, 0);
    rect(tmpPoint1.x, tmpPoint1.y, mouseX - tmpPoint1.x, mouseY - tmpPoint1.y);
    pop();
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
