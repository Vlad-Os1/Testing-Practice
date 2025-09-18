import {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './index.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('takes a string "javascript" and returns it with the first character capitalized "Javascript"', () => {
  expect(capitalize('javascript')).toBe('Javascript');
});

test('takes a string "Javascript" and returns it reversed "tpircsavaJ"', () => {
  expect(reverseString('Javascript')).toBe('tpircsavaJ');
});

// Calculator Tests
// add
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
// subtract
test('subtract 2 - 1 to equal 1 ', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
// divide
test('divide 6 / 2 to equal 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
//multiply
test('multiply 4 * 2  to equal 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

// Caesar Shift Cipher
test('Caesar Cipher "xyz" shift of 3 return "abc" ', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher case preservation, "HeLLo" shift of 3 return "KhOOr"', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Punctuation, spaces, and other non-alphabetical characters remain unchanged, "Hello, World!" shift of 3 return "Khoor, Zruog!"', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Negative shift', () => {
  expect(caesarCipher('Hello, World!', -3)).toBe('Ebiil, Tloia!');
});

// Analyze Array
test('analyzeArray return object', () => {
  const data = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(data).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
