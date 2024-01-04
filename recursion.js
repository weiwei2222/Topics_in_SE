// 1. Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(5));

// 2. Write a JavaScript program to find
// the greatest common divisor (GCD) of two positive numbers using recursion.
const gcd = function (a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
console.log(gcd(2154, 458));

// 3. Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
const range = function (start_num, end_num) {
  if (end_num - start_num === 2) {
    return [start_num + 1];
  } else {
    let list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};
console.log(range(2, 9));

// 4. Write a JavaScript program to compute the sum of an array of integers.
const array_sum = function (my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  } else {
    return my_array.pop() + array_sum(my_array);
  }
};
console.log(array_sum([1, 2, 3, 4, 5, 6]));
// var array4 = [1, 2, 3, 4, 5, 6]; // Expected Output : 21
// const sumNum = array4.reduce((acc, current) => acc + current, 0);
// console.log(sumNum);

// 5. Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
const exponent = function (a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * exponent(a, n - 1);
  }
};
console.log(exponent(4, 2));

// 6. Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
// Each subsequent number is the sum of the previous two.
const fibonacci_series = function (n) {
  // Base case: if n is less than or equal to 1, return the base series [0, 1].
  if (n <= 1) {
    return [0, 1];
  } else {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s.slice(0, n);
  }
};
console.log(fibonacci_series(8));

//7. Write a JavaScript program to check whether a number is even or not.
function is_even_recursion(number) {
  if (number < 0) {
    number = Math.abs(number);
  }
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  } else {
    number = number - 2;
    return is_even_recursion(number);
  }
}
console.log(is_even_recursion(234)); // true
console.log(is_even_recursion(-45)); // false
console.log(is_even_recursion(65)); // false

// 8. Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
Array.prototype.br_search = function (target) {
  const half = parseInt(this.length / 2);
  if (target === this[half]) {
    return half;
  }
  if (target > this[half]) {
    return half + this.slice(half, this.length).br_search(target);
  } else {
    return this.slice(0, half).br_search(target);
  }
};
const l = [0, 1, 2, 3, 4, 5, 6];
console.log(l.br_search(5));

// 9. Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]
Array.prototype.merge_Sort = function () {
  if (this.length <= 1) {
    return this;
  }
  const half = parseInt(this.length / 2);
  const left = this.slice(0, half).merge_Sort();
  const right = this.slice(half, this.length).merge_Sort();
  const merge = function (left, right) {
    const mergedArray = [];
    while (left.length > 0 && right.length > 0) {
      mergedArray.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return mergedArray.concat(left).concat(right);
  };
  return merge(left, right);
};
const inputArray = [34, 7, 23, 32, 5, 62];
const sortedArray = inputArray.merge_Sort();
console.log(sortedArray);
// const array9 = [34, 7, 23, 32, 5, 62];
// const sortedArr = array9.sort((a, b) => a - b);
// console.log(sortedArr);

// 10. Write a JavaScript program to check whether a given string is a palindrome or not using recursion.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards,
// such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".
const test = (text) => {
  if (typeof text !== "string") {
    return "String should not be empty!";
  }
  if (text.length <= 1) {
    return true;
  }
  if (text[0] !== text[text.length - 1]) {
    return false;
  } else {
    return test(text.slice(1, text.length - 1));
  }
};
console.log(test("madam"));
console.log(test("abdb"));
console.log(test("ab"));
console.log(test("a"));

// 11. Write a JavaScript program to convert binary number (positive) to decimal number using recursion.
const binaryToDecimal = (binaryString, index = 0) => {
  if (index === binaryString.length) {
    return 0;
  }
  const currentDigit = parseInt(binaryString[index]);
  const restDecimal = binaryToDecimal(binaryString, index + 1);
  const currentDecimal =
    currentDigit * Math.pow(2, binaryString.length - index - 1);
  return currentDecimal + restDecimal;
};
console.log(binaryToDecimal("1"));
console.log(binaryToDecimal("0"));
console.log(binaryToDecimal("10"));
console.log(binaryToDecimal("101"));

// 12. Write a JavaScript program to search for a given integer in an array of sorted integers
// using the Binary Search Algorithm and recursion.
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, end);
};
const sortedArray1 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const target1 = 6;
const sortedArray2 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const target2 = -1;
console.log(`Index of ${target1}: ${binarySearch(sortedArray1, target1)}`);
console.log(`Index of ${target2}: ${binarySearch(sortedArray2, target2)}`);

// 13. A string consists of digits ranging from 2 to 9, inclusive.
// Write a JavaScript program to get all possible letter combinations that represent the number using recursion.
const letterCombinations = (digits) => {
  const length = digits?.length;
  const result = [];
  if (!length) {
    return result;
  }
  const digitMap = {
    1: "abc",
    2: "def",
    3: "ghi",
    4: "jkl",
    5: "mno",
    6: "pqr",
    7: "stu",
    8: "vwx",
    9: "yz",
  };
  const generateCombinations = (index, combination) => {
    let letter;
    let letterIndex;
    if (index >= length) {
      result.push(combination);
      return;
    }
    const digit = digitMap[digits[index]];
    letterIndex = 0;
    while ((letter = digit[letterIndex++])) {
      generateCombinations(index + 1, combination + letter);
    }
  };
  generateCombinations(0, "");
  return result;
};
console.log(letterCombinations("12"));
