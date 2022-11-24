function removeFirstCharacter(str) {
  return str.slice(1, str.length);
}

function removeLastCharacter(str) {
  return str.slice(0, str.length - 1);
}

function makeAllLowerCase(str) {
  return str.toLowerCase();
}

function makeAllUpperCase(str) {
  return str.toUpperCase();
}

export { removeFirstCharacter, removeLastCharacter, makeAllUpperCase, makeAllLowerCase };
