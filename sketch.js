const elements = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    elements.push(new Rectangle({ x: 0, y: 0 }, 400, 400, false));
    elements.push(new Rectangle({ x: 400, y: 0 }, 400, 400, true));
    elements.push(new Rectangle({ x: 800, y: 0 }, 400, 400, false));
    elements.push(new Rectangle({ x: 0, y: 400 }, 400, 400, true));
    elements.push(new Rectangle({ x: 400, y: 400 }, 400, 400, false));
    elements.push(new Rectangle({ x: 800, y: 400 }, 400, 400, true));

    for (let element of elements) {
        element.drawRect();
    }
}

function draw() {
    for (let element of elements) {
        element.update();
    }
}
