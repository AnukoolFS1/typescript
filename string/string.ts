//string
let _name: string = "Anukool";
let profession: string = 'Full Stack Developer'

let profile: string = `Hello, I am ${_name} and I am a ${profession}`

console.log(profile)

//predefined values
let $name: "Anukool" = "Anukool"

// $name = "Chauhan" // throw an error type '"Chauhan"' is not assignable to tyep '"Anukool"'

// predefined multiple values
let singer: "KK" | "Arijit" = "KK";
singer = "Arijit"

//singer = "Justin" // Type '"Justin"' is not assignable to type '"KK" | "Arijit"'.
/////////////////////////////////////////////////////////////////////

//Boolean
let pending: boolean = true;

pending = false;