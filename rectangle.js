class Rectangle {
    constructor(origin, width, height, reverse) {
        // Outline rectangle
        this.origin = origin;
        this.width = width;
        this.height = height;
        // Available space
        this.corners = [
            { x: this.origin.x, y: this.origin.y }, // top left
            { x: this.origin.x + this.width, y: this.origin.y }, // top right
            { x: this.origin.x + this.width, y: this.origin.y + this.height }, // bottom right
            { x: this.origin.x, y: this.origin.y + this.height }, // bottom left
        ];
        if (reverse) {
            this.corners = this.corners.reverse();
        }
        // Other
        this.offset = 4;
        this.section = 0;
    }

    drawRect() {
        stroke(200, 0, 60);
        // fill(200, 0, 60, 20);
        rect(this.origin.x, this.origin.y, this.width, this.height);
    }

    getCorners() {
        switch (this.section) {
            case 0:
                return [this.corners[0], this.corners[1], this.corners[2]];
            case 1:
                return [this.corners[1], this.corners[2], this.corners[3]];
            case 2:
                return [this.corners[2], this.corners[3], this.corners[0]];
            case 3:
                return [this.corners[3], this.corners[0], this.corners[1]];
        }
    }

    update() {
        let sectionPlusOne = this.section === 3 ? 0 : this.section + 1;
        let corners = this.getCorners();
        let startCorner = corners[0];
        let firstCorner = corners[1];
        let secondCorner = corners[2];
        let resultX;
        let resultY;

        push();
        translate(firstCorner.x, firstCorner.y);
        let interimsVector = createVector(
            secondCorner.x - firstCorner.x,
            secondCorner.y - firstCorner.y
        );
        interimsVector.setMag(this.offset);
        resultX = firstCorner.x + interimsVector.x;
        resultY = firstCorner.y + interimsVector.y;
        pop();

        stroke(200, 0, 60);
        line(startCorner.x, startCorner.y, resultX, resultY);
        this.corners[sectionPlusOne].x = resultX;
        this.corners[sectionPlusOne].y = resultY;

        if (this.section === 3) {
            this.section = 0;
        } else {
            this.section++;
        }
    }
}
