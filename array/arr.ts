// let arrayName: type[]

let skill: string[] = ["Problem Solving", "Programming"]

skill[1] = "Html"

skill[2] = "Programming"

skill.push("typescript")

// skill.push(100); // will throw an error -> Argument of type 'number' is not assignable to parameter of type an error

console.log(skill)


let score: (string | number)[];

score = ["Programming", 100, "Software Design", 90]
