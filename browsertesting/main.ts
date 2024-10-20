// let parsedNum: string = "abc"

// console.log(isNaN(parsedNum))


let validNum: string = "123";
let invalidNum: string = "abc";

// Convert strings to numbers
let num1 = Number(validNum);
let num2 = Number(invalidNum);

console.log(num1)
console.log(num2)

console.log(isNaN(num1));  // false, "123" is a valid number
console.log(isNaN(num2));  // true, "abc" is not a valid number
