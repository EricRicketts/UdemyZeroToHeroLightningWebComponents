const x = 4;

function addTwo(x) {
  return x + 2;
}

const addThree = (x) => x + 3;

var y = 3;

function varScope() {
  var output = [];
  var x = 4;
  output.push(x);
  x = 8; // var can be reassigned
  output.push(x);
  var x = 10; // var can be redeclared
  output.push(x);
  if (2 === 2) {
    var x1 = 1;
  }

  output.push(x1); // var is functionally scoped
  output.push(y); // var is globally scoped

  return output; // [4, 8, 10, 1, 3]
}

function letScope() {
  var output = [];

  let x = 1;

  if (2 === 2) {
    output.push(x); // block scoped x declared outside of block has visibility into the block
    x = 2;
    output.push(x);
  }

  if (3 === 3) {
    let x1 = 3;
    output.push(x1); // x1 now visible outside of this scope
  }

  return output; // [1, 2, 3]
}

export { x, addTwo, addThree, varScope, letScope };
