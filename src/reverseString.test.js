const reverseString = require('./reverseString');

test('hello', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('123', () => {
  expect(reverseString("123")).toBe("321");
});

test('Hello', () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test('hello you', () => {
  expect(reverseString("hello you")).toBe("uoy olleh");
});

test('empty', () => {
  expect(reverseString('')).toBe('');
});

test('white space', () => {
  expect(reverseString(" ")).toBe(" ");
});

test('leading space', () => {
  expect(reverseString(" hello")).toBe("olleh ");
});