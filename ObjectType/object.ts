//The typescript "object" type represents all values that are not in primitive types.

// the following are primitive types in Typescript
/**
 * number
 * bigint
 * string
 * boolean
 * null
 * undefined
 * symbol
 */

let employee:object = {
    firstName: "John",
    lastName: "Doe",
    age:25,
    jobTilte: 'Web Developer'
}

console.log(employee)

// employee.firstName = "Jane" // error property does not exist
// console.log(employee.description) // error property does not exist instead of undefined

// To explicitly specify properties of the object, you first use the following syntax to
// declare the employee object

let employee1: {firstName: string, lastName: string, age: number, jobTitle: string};

employee1 = {
    firstName: "Anukool",
    lastName: "Chauhan",
    age:25,
    jobTitle: "Web Developer"
}

console.log(employee1)
