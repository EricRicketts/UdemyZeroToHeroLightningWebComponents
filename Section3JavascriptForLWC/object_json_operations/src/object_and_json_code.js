const firstObject = {
  a: "foo",
  b: "bar",
  c: 1,
  d: 3
};

const secondObject = {
  a: "salesforce",
  b: "is not a good choice",
  c: firstObject,
  d: ['a', 'b', 'c', 'd']
};

const simpleObject = {
  foo: "bar",
  fizz: 21,
  bool: true,
  h: { first: "a", second: [1, 2, "c"]}
};

export { firstObject, secondObject, simpleObject };
