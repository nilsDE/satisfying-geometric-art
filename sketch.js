let test;

function setup() {
    createCanvas(601, 601);
    background(255);
    test = new Rectangle({ x: 0, y: 0 }, 600, 600);
    test.drawRect();
}

function draw() {
    test.update();
}
