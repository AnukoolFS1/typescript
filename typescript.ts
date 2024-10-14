
// String type
let message: string = `"Hello, TypeScript"`;

// Number type
let Nums: number = 100;

// Boolean type
let active: boolean = true;

// Array annotations
    // String only
let arr1: string[] = ["Hello", "Typescript"];

    // Number Only
let arr2: number[] = [1,2,3,4,5];

// Object
let obj: {name:string, age: number}; 
// now the obj can only have object with only to properties
// with name and age where the properties too are restricted
// to their types
obj = {
    name:"Anukool",
    age: 25
}


// Functions types
    //traditional function
function typescriptFunction(a:number, b: string):number {
    return 5
}

let result: number = typescriptFunction(5, "num");

    // arrow function
const arrowtypefunction = (a:string, b:number):boolean => {
    return true
}