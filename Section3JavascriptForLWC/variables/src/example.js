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

export { x, addTwo, addThree, varScope };
