class Shape {
  constructor(corners, reverse, offset, color) {
    // Outline rectangle
    this.originalCorners = this.copyCorners(corners);

    // Available space
    this.corners = [...corners];
    if (reverse) {
      this.corners = this.corners.reverse();
    }
    // Other
    this.offset = offset;
    this.section = 0;
    this.noOfCorners = corners.length;
    this.color = color;
  }

  copyCorners(corners) {
    let result = [];
    corners.forEach((c) => {
      let copy = Object.assign({}, c);
      result.push(copy);
    });
    return result;
  }

  drawRect() {
    push();
    stroke(this.color.r, this.color.g, this.color.b);
    for (let i = 0; i < this.noOfCorners; i++) {
      if (this.originalCorners[i + 1]) {
        line(this.originalCorners[i].x, this.originalCorners[i].y, this.originalCorners[i + 1].x, this.originalCorners[i + 1].y);
      } else {
        line(this.originalCorners[i].x, this.originalCorners[i].y, this.originalCorners[0].x, this.originalCorners[0].y);
      }
    }
    pop();
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

    stroke(this.color.r, this.color.g, this.color.b);
    let lengthOfLine = dist(startCorner.x, startCorner.y, resultX, resultY);
    if (lengthOfLine > this.offset) {
      line(startCorner.x, startCorner.y, resultX, resultY);
    }
    this.corners[sectionPlusOne].x = resultX;
    this.corners[sectionPlusOne].y = resultY;

    if (this.section === this.noOfCorners - 1) {
      this.section = 0;
    } else {
      this.section++;
    }
  }
}
