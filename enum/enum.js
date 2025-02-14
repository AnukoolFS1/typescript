var naming;
(function (naming) {
    naming[naming["abc"] = 0] = "abc";
    naming[naming["abcd"] = 1] = "abcd";
})(naming || (naming = {}));
console.log(naming);
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3
// The first member ("Up") is assigned "0" by default.
// The next members get incremented values ("1","2", "3", ...).
// Example 2: Custom Starting Value
// You can set a custom numeric value for the first member, and the rest will auto-increment.
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failure"] = 2] = "Failure";
    Status[Status["Pending"] = 3] = "Pending"; // 3
})(Status || (Status = {}));
console.log(Status.Success); // 1
console.log(Status.Failure); // 2
console.log(Status.Pending); // 3
// Example 3: Fully Custom Numeric Values
// You can manually assign values to all members.
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["Forbidden"] = 403] = "Forbidden";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["Random"] = 405] = "Random";
    HttpStatus[HttpStatus["Random2"] = 406] = "Random2";
})(HttpStatus || (HttpStatus = {}));
console.log(HttpStatus.OK); // 200
console.log(HttpStatus.BadRequest); // 400
console.log("random", HttpStatus.Random); // 405
console.log(HttpStatus.NotFound); // 404
console.log("random2", HttpStatus.Random2); // 406
