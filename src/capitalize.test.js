const capitalize = require('./capitalize');

test('hello to Hello', () => {
  expect(capitalize("hello")).toBe("Hello");
});
test('Hello to Hello', () => {
  expect(capitalize("Hello")).toBe("Hello");
});
test('empty to empty', () => {
  expect(capitalize("")).toBe("");
});
test('a to A', () => {
  expect(capitalize("a")).toBe("A");
});
test('space', () => {
  expect(capitalize(" a")).toBe(" a");
});
test('num', () => {
  expect(capitalize("123asd")).toBe("123asd");
});