// normal array (with offcourse the type string and number)
let arr: (string | number)[] = [25, "anukool"];

// tuple
let arr3: [string, number, boolean] = ["Anukool", 25, true]

// let arr3: [string, number, boolean] = [25, true, "Anukool"]
/** error TS2322: Type 'number' is not assignable to type 'string'.
5 let arr3: [string, number, boolean] = [ 25, true, "Anukool"]
tuple.ts:5:45 - error TS2322: Type 'boolean' is not assignable to type 'number'.
5 let arr3: [string, number, boolean] = [ 25, true, "Anukool"]
tuple.ts:5:51 - error TS2322: Type 'string' is not assignable to type 'boolean'.
5 let arr3: [string, number, boolean] = [ 25, true, "Anukool"]
*/

// optional tuple

let arr4: [string, number, boolean?] = ["anukool", 24]
// provide it or not both ways it will work


// method will still disturb the discipline of tuple and convert it to a normal array
arr3.push("hello");
console.log(arr3)