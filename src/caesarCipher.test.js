const caesarCipher = require('./caesarCipher');

test('a to d', () => {
  expect(caesarCipher('a', 3)).toBe('d');
});

test('abc to def', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('DEF to GHI', () => {
  expect(caesarCipher('DEF', 4)).toBe('HIJ');
});

test('HeLLo to KhOOr', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('xyz to abc', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Puncuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('0', () => {
  expect(caesarCipher('abc', 0)).toBe('abc');
});

test('26', () => {
  expect(caesarCipher('abc', 26)).toBe('abc');
});

test('29', () => {
  expect(caesarCipher('xyz', 29)).toBe('abc');
});

test('-1', () => {
  expect(caesarCipher('def', -1)).toBe('cde');
});

test('-29', () => {
  expect(caesarCipher('def', -29)).toBe('abc');
});

test('The quiCk broWn fox Jumps over the Lazy dOg', () => {
  expect(caesarCipher('The quiCk broWn fox Jumps over the Lazy dOg', 13)).toBe('Gur dhvPx oebJa sbk Whzcf bire gur Ynml qBt');
});

