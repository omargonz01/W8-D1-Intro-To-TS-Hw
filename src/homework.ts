// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: if i dont decalare it it will infer a number type

let b = 'Thieves';
// A: this will infer a string type

let c = [true, false, false];
// A: this will infer a boolean type

let d = {age: number};
// A: this will infer 'any' type - not number even though it is being used as a value

let e = [3]
// A:again, this will infer a number type

let f;
// A: since there is nothing there it will infer a 'any' type

let g = []
// A: this will also infer a 'any' type, which is a no no 



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A:
// there is no readonly before the release year, so there needs to be a realeasyear date there since it is declared in the type

let prices = [100, 200, 300];
prices[0] = '$100';
// A:
//  the prices are numbers, and it is trying to reasign the value as a string

function myFunc(a: number, b: number): number {}
// A: there needs to be a value that is returned by the function - since it is not declared void or undefined nor any 



