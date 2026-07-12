const analyzeArray = require('./analyzeArray');

test('123 length', () => {
  expect(analyzeArray([1,2,3]).length).toBe(3);
});

test('0 length', () => {
  expect(analyzeArray([]).length).toBe(0);
});

test('123 avg', () => {
  expect(analyzeArray([1,2,3]).average).toBe(2);
});

test('0 avg', () => {
  expect(analyzeArray([]).average).toBe(NaN);
});

test('avg', () => {
  expect(analyzeArray([0,-2,3,10, 4]).average).toBe(3);
});

test('min', () => {
  expect(analyzeArray([0,-2,3,10, 4]).min).toBe(-2);
});

test('max', () => {
  expect(analyzeArray([0,-2,3,10, 4]).max).toBe(10);
});
