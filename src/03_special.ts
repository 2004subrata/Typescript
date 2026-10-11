// strictNullChecks

// let title: string = "introduction";
// title = undefined;

let subtitle: string | undefined = undefined;
subtitle = "Description";

// void: function doesn't return useful value
function log(msg: string): void {
  console.log(msg);
}

// never: never returns
function fail(msg: string): never {
  throw new Error(msg);
}

// DO NOT USE 'any' -> TRY TO IGNORE AS MUCH AS POSSIBLE

const valueAny: any = JSON.parse('{"x" : 1}');
valueAny.notThere.toFixed(2); // this compiles but can break runtime/explode at run time
