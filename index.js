export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    reversedString += string.charAt(string.length - 1 - i);
  }
  return reversedString;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(string, shift) {
  let shiftedString = '';
  let upperCaseBase = 65;
  let lowerCaseBase = 97;
  function isLetter(letter) {
    return /[a-z]/i.test(letter);
  }
  function isUppercase(letter) {
    return letter == letter.toUpperCase();
  }
  for (let i = 0; i < string.length; i++) {
    let letterIndex;
    if (isLetter(string[i])) {
      if (isUppercase(string[i])) {
        letterIndex = string.charCodeAt(i) - upperCaseBase;
      } else {
        letterIndex = string.charCodeAt(i) - lowerCaseBase;
      }
      let shiftedLetter = letterIndex + shift;
      shiftedLetter = (shiftedLetter + 26) % 26;
      if (isUppercase(string[i])) {
        shiftedString += String.fromCharCode(shiftedLetter + upperCaseBase);
      } else
        shiftedString += String.fromCharCode(shiftedLetter + lowerCaseBase);
    } else {
      shiftedString += string[i];
    }
  }
  return shiftedString;
}

export function analyzeArray(arr) {
  let average = 0;
  arr.forEach((number) => {
    average += number;
  });
  average = average / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return {
    average,
    min,
    max,
    length: arr.length,
  };
}
