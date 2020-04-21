class Rectangle {
    constructor(origin, width, height) {
        // Outline rectangle
        this.origin = origin;
        this.width = width;
        this.height = height;

        // Available space
        this.corners = [
            { x: this.origin.x, y: this.origin.y }, // initial top left
            { x: this.origin.x + this.width, y: this.origin.y }, // initial top right
            { x: this.origin.x + this.width, y: this.origin.y + this.height }, // initial bottom right
            { x: this.origin.x, y: this.origin.y + this.height }, // initial bottom left
        ];

        // Other
        this.offset = 4;
        this.section = 0;
    }

    drawRect() {
        stroke(0, 0, 0);
        fill(20, 0, 80, 20);
        rect(this.origin.x, this.origin.y, this.width, this.height);
    }

    update() {
        let sectionPlusOne = this.section === 3 ? 0 : this.section + 1;
        let sectionPlusTwo = sectionPlusOne === 3 ? 0 : sectionPlusOne + 1;

        let topRightCorner = this.corners[sectionPlusOne];
        let bottomRightCorner = this.corners[sectionPlusTwo];
        let resultX;
        let resultY;

        push();
        translate(topRightCorner.x, topRightCorner.y);
        let interimsVector = createVector(
            bottomRightCorner.x - topRightCorner.x,
            bottomRightCorner.y - topRightCorner.y
        );
        interimsVector.setMag(this.offset);
        resultX = topRightCorner.x + interimsVector.x;
        resultY = topRightCorner.y + interimsVector.y;
        pop();
        stroke(200, 0, 60);
        line(
            this.corners[this.section].x,
            this.corners[this.section].y,
            resultX,
            resultY
        );

        this.corners[sectionPlusOne].x = resultX;
        this.corners[sectionPlusOne].y = resultY;

        if (this.section === 3) {
            this.section = 0;
        } else {
            this.section++;
        }
        rotate(-HALF_PI);
    }
}
