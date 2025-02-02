// Sometimes you need to store a value in a variable.
// But you don't know its type at the time writing the program.
// And the unknown value may come from third party API or user input.
// In this case, you want to opt-out of the type checking and allow the value to
// to Pass through the compiler time check
// To do so, you use the "any" type.
// The "any" type allows you to assign a value of "any" type to a variable
const json = `{"latitude":10.11, "longitude": 12.12}`;
const currentLocation = JSON.parse(json);
console.log(currentLocation);
// In this example, the "currentLocation" variable is assigned to ann object
// returned by the "JSON.parse()" function.
// However, when you use the currentLocation to access object properties,
// Typescript also won't carry any check:
console.log(currentLocation.x);
