function insertExample(offset) {
  elements.push(
    new Shape(
      [
        { x: 0, y: 0 },
        { x: 400, y: 0 },
        { x: 400, y: 400 },
        { x: 0, y: 400 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 400, y: 0 },
        { x: 800, y: 0 },
        { x: 800, y: 400 },
        { x: 400, y: 400 },
      ],
      true,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 800, y: 0 },
        { x: 1200, y: 0 },
        { x: 1200, y: 400 },
        { x: 800, y: 400 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 0, y: 400 },
        { x: 400, y: 400 },
        { x: 400, y: 800 },
        { x: 0, y: 800 },
      ],
      true,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 400, y: 400 },
        { x: 800, y: 400 },
        { x: 800, y: 800 },
        { x: 400, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 800, y: 400 },
        { x: 1200, y: 400 },
        { x: 1200, y: 800 },
        { x: 800, y: 800 },
      ],
      true,
      offset
    )
  );
}

function insertOverlayExample2(offset) {
  elements.push(
    new Shape(
      [
        { x: 200, y: 0 },
        { x: 1000, y: 0 },
        { x: 1000, y: 800 },
        { x: 200, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 200, y: 0 },
        { x: 1000, y: 0 },
        { x: 1000, y: 800 },
        { x: 200, y: 800 },
      ],
      true,
      offset
    )
  );
}

function insertSatisfyingExample(offset) {
  elements.push(
    new Shape(
      [
        { x: 0, y: 0 },
        { x: 0, y: 400 },
        { x: 300, y: 400 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 300, y: 400 },
        { x: 0, y: 0 },
        { x: 300, y: 0 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 0, y: 400 },
        { x: 300, y: 400 },
        { x: 0, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 300, y: 400 },
        { x: 0, y: 800 },
        { x: 300, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 300, y: 800 },
        { x: 300, y: 400 },
        { x: 600, y: 700 },
        { x: 600, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 300, y: 0 },
        { x: 300, y: 400 },
        { x: 600, y: 100 },
        { x: 600, y: 0 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 600, y: 100 },
        { x: 600, y: 0 },
        { x: 900, y: 0 },
        { x: 900, y: 400 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 900, y: 0 },
        { x: 900, y: 400 },
        { x: 1200, y: 0 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 900, y: 400 },
        { x: 1200, y: 0 },
        { x: 1200, y: 400 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 1200, y: 400 },
        { x: 900, y: 400 },
        { x: 1200, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 900, y: 400 },
        { x: 1200, y: 800 },
        { x: 900, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 900, y: 800 },
        { x: 900, y: 400 },
        { x: 600, y: 700 },
        { x: 600, y: 800 },
      ],
      false,
      offset
    )
  );
  elements.push(
    new Shape(
      [
        { x: 900, y: 400 },
        { x: 600, y: 700 },
        { x: 300, y: 400 },
        { x: 600, y: 100 },
      ],
      false,
      offset
    )
  );
}
