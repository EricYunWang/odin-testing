const Calculator = require('./calculator');

test('add', () => {
  expect(new Calculator(1,3).add()).toBe(4);
});

test('add 0', () => {
  expect(new Calculator(0,3).add()).toBe(3);
});

test('add negative', () => {
  expect(new Calculator(1,-3).add()).toBe(-2);
});

test('sub', () => {
  expect(new Calculator(3, 1).subtract()).toBe(2);
});

test('sub negative', () => {
  expect(new Calculator(-3,-3).subtract()).toBe(0);
});

test('sub zero', () => {
  expect(new Calculator(3,0).subtract()).toBe(3);
});

test('multiply', () => {
  expect(new Calculator(3,2).multiply()).toBe(6);
});

test('x 0', () => {
  expect(new Calculator(3,0).multiply()).toBe(0);
});

test('x negative', () => {
  expect(new Calculator(3,-2).multiply()).toBe(-6);
});

test('/', () => {
  expect(new Calculator(10,2).divide()).toBe(5);
});

test('/ negative', () => {
  expect(new Calculator(10,-2).divide()).toBe(-5);
});

test('0 divide', () => {
  expect(new Calculator(0,-2).divide()).toBe(0);
});

test('divide 0 ', () => {
  expect(new Calculator(3,0).divide()).toBe("error");
});

