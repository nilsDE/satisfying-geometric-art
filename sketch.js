let test;
let test2;
let counter = 0;

function setup() {
    createCanvas(1402, 601);
    background(255);
    test = new Rectangle({ x: 0, y: 0 }, 600, 600);
    test2 = new Rectangle({ x: 0, y: 0 }, 600, 600);
    test.drawRect();
    test2.drawRect();
}

function draw() {
    test.update();
    // pop();
    // translate(600, 600);
    // rotate(-HALF_PI);
    // test2.update();
    // push();
}
