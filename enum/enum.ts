enum naming { abc, abcd }

console.log(naming)




//1// WHAT is an Enum?
// An Enum (short for "enumeration") is a special type in TypeScript that allows you to define a
// set of named constants. These constants can represent numeric or string values.
// Enums help in improving code readability and maintainability by giving meaningful name to 
// constant values.

//2// Types of Enums in TypeScript
// TypeScript provides different types of enums:
// 1. Numeric Enums (default)
// 2. String Enums
// 3. Heterogeneous Enums (Mix of string & numeric)
// 4. Const Enums

//3// Numeric Enums (Default Behavior)
// By default, TypeScript assigns numeric values to enum members starting from "0".

// Example 1: Basic Numeric Enum

enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right //3
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3
// The first member ("Up") is assigned "0" by default.
// The next members get incremented values ("1","2", "3", ...).

// Example 2: Custom Starting Value
// You can set a custom numeric value for the first member, and the rest will auto-increment.
enum Status {
    Success = 1, // Starts from 1
    Failure, // 2
    Pending // 3
}

console.log(Status.Success) // 1
console.log(Status.Failure) // 2
console.log(Status.Pending) // 3

// Example 3: Fully Custom Numeric Values
// You can manually assign values to all members.
enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound, // will have the 404 itself since it is being auto increment from previous
    Random = 405,
    Random2
}

console.log(HttpStatus.OK) // 200
console.log(HttpStatus.BadRequest) // 400
console.log("random",HttpStatus.Random) // 405
console.log(HttpStatus.NotFound) // 404
console.log("random2",HttpStatus.Random2) // 406
