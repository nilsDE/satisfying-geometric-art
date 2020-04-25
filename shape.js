class Shape {
  constructor(corners, reverse, offset) {
    // Outline rectangle
    this.origin = origin;
    this.width = width;
    this.height = height;
    // Available space
    this.corners = corners;
    if (reverse) {
      this.corners = this.corners.reverse();
    }
    // Other
    this.offset = offset;
    this.section = 0;
    this.noOfCorners = corners.length;
  }

  drawRect() {
    stroke(200, 0, 60);

    for (let i = 0; i < this.noOfCorners; i++) {
      if (this.corners[i + 1]) {
        line(this.corners[i].x, this.corners[i].y, this.corners[i + 1].x, this.corners[i + 1].y);
      } else {
        line(this.corners[i].x, this.corners[i].y, this.corners[0].x, this.corners[0].y);
      }
    }
  }

  getCorners() {
    let result = [];
    let position = 0;
    for (let i = 0; i < 3; i++) {
      if (this.corners[this.section + i]) {
        result.push(this.corners[this.section + i]);
      } else {
        result.push(this.corners[position]);
        position++;
      }
    }
    return result;
  }

  update() {
    let sectionPlusOne = this.section === this.noOfCorners - 1 ? 0 : this.section + 1;
    let corners = this.getCorners();
    let startCorner = corners[0];
    let firstCorner = corners[1];
    let secondCorner = corners[2];
    let resultX;
    let resultY;

    push();
    translate(firstCorner.x, firstCorner.y);
    let interimsVector = createVector(secondCorner.x - firstCorner.x, secondCorner.y - firstCorner.y);
    interimsVector.setMag(this.offset);
    resultX = firstCorner.x + interimsVector.x;
    resultY = firstCorner.y + interimsVector.y;
    pop();

    stroke(200, 0, 60);
    line(startCorner.x, startCorner.y, resultX, resultY);
    console.log(startCorner.x, startCorner.y, resultX, resultY);
    this.corners[sectionPlusOne].x = resultX;
    this.corners[sectionPlusOne].y = resultY;

    if (this.section === this.noOfCorners - 1) {
      this.section = 0;
    } else {
      this.section++;
    }
  }
}
