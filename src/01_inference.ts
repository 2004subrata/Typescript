// goal -> understand when to let Typescript infer types
// ts -> js knows very well
// when typescript will writes the types / ypu are going to write

let count = 0; // ts sees number
const username = "2004subrata";

// over annotation isn't bad -> just noisy

export function add(a: number, b: number): number {
  return a + b;
}
console.log(add(3, 2));

// you should also annotate when the types is not obvious
let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;
