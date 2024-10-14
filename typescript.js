// String type
let message = `"Hello, TypeScript"`;
// Number type
let Nums = 100;
// Boolean type
let active = true;
// Array annotations
// String only
let arr1 = ["Hello", "Typescript"];
// Number Only
let arr2 = [1, 2, 3, 4, 5];
// Object
let obj;
// now the obj can only have object with only to properties
// with name and age where the properties too are restricted
// to their types
obj = {
    name: "Anukool",
    age: 25
};
// Functions types
//traditional function
function typescriptFunction(a, b) {
    return 5;
}
let result = typescriptFunction(5, "num");
// arrow function
const arrowtypefunction = (a, b) => {
    return true;
};
