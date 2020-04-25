function insertExample(offset) {
  elements.push(new Rectangle({ x: 0, y: 0 }, 400, 400, false, offset));
  elements.push(new Rectangle({ x: 400, y: 0 }, 400, 400, true, offset));
  elements.push(new Rectangle({ x: 800, y: 0 }, 400, 400, false, offset));
  elements.push(new Rectangle({ x: 0, y: 400 }, 400, 400, true, offset));
  elements.push(new Rectangle({ x: 400, y: 400 }, 400, 400, false, offset));
  elements.push(new Rectangle({ x: 800, y: 400 }, 400, 400, true, offset));
}

function insertOverlayExample2(offset) {
  elements.push(new Rectangle({ x: 200, y: 0 }, 800, 800, false, offset));
  elements.push(new Rectangle({ x: 200, y: 0 }, 800, 800, true, offset));
}

function insertOverlayExample(offset) {
  elements.push(new Rectangle({ x: 0, y: 0 }, 400, 400, false, offset));
  elements.push(new Rectangle({ x: 400, y: 0 }, 400, 400, true, offset));
  elements.push(new Rectangle({ x: 800, y: 0 }, 400, 400, false, offset));
  elements.push(new Rectangle({ x: 0, y: 0 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 200, y: 0 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 400, y: 0 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 600, y: 0 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 800, y: 0 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 1000, y: 0 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 0, y: 200 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 200, y: 200 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 400, y: 200 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 600, y: 200 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 800, y: 200 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 1000, y: 200 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 0, y: 400 }, 400, 400, true, offset));
  elements.push(new Rectangle({ x: 400, y: 400 }, 400, 400, false, offset));
  elements.push(new Rectangle({ x: 800, y: 400 }, 400, 400, true, offset));
  elements.push(new Rectangle({ x: 0, y: 400 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 200, y: 400 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 400, y: 400 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 600, y: 400 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 800, y: 400 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 1000, y: 400 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 0, y: 600 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 200, y: 600 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 400, y: 600 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 600, y: 600 }, 200, 200, false, offset));
  elements.push(new Rectangle({ x: 800, y: 600 }, 200, 200, true, offset));
  elements.push(new Rectangle({ x: 1000, y: 600 }, 200, 200, false, offset));
}
