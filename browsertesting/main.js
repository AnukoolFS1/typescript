// let parsedNum: string = "abc"
// console.log(isNaN(parsedNum))
var validNum = "123";
var invalidNum = "abc";
// Convert strings to numbers
var num1 = Number(validNum);
var num2 = Number(invalidNum);
console.log(num1);
console.log(num2);
console.log(isNaN(num1)); // false, "123" is a valid number
console.log(isNaN(num2)); // true, "abc" is not a valid number


console.log(null == null)