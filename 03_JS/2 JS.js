/*

****

Types of Functions in JavaScript (by purpose/behavior)

1. Named functions → function add() {}

2. Anonymous functions → function () {}

3. First-class functions → Functions treated as values (can be passed, returned).

4. Higher-order functions → Take or return other functions.

5. Callback functions → Passed into another function to be called later.

6. Pure functions → No side effects, always same input → same output.

7. Impure functions → Cause side effects (e.g., modify global vars, log, fetch).

8. Recursive functions → Call themselves until a base condition.

9. Generator functions → Use function* + yield.

10. Async functions → Use async/await, return Promises.

****
*/

// 1. Function Declaration
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Anil"));


// 2. Function Expression
const greet = function(name) {
  return `Hi, ${name}!`;
};
console.log(greet("Bhai"));


// 3. Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3));



// 4. Anonymous Function (no name)
setTimeout(function() {
  console.log("Anonymous function executed!");
}, 500);



// 5. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE executed!");
})();


// 6. Higher-Order Function (takes/returns function)
function operate(a, b, fn) {
  return fn(a, b);
}
console.log(operate(5, 2, add)); // Passing function as argument



// 7. Returning a Function (Closure)
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}
const double = multiplier(2);
console.log(double(10));



// 8. Async Function
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);


// 9. Generator Function
function* idGenerator() {
  let id = 1;
  while (true) {
    if(id == 5){
        return id; // function will end here
    }
    yield id++;

  }
}
const gen = idGenerator(); // {value, done: true | false}

console.log(gen.next().value); // {value: 1}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next()); // {value: 5, done: true}
console.log(gen.next()); // {value: undefined, done: true}


// 10. First-Class Functions Examples
// (a) Store function in a variable
const sayHi = function(name) {
  return `Hi, ${name}`;
};
console.log(sayHi("Anil"));

// (b) Pass function as argument
function execute(fn, value) {
  return fn(value);
}
console.log(execute(sayHi, "Bhai"));

// (c) Return function from another
function outer() {
  return function() {
    return "I came from outer!";
  };
}
const innerFn = outer();
console.log(innerFn());

// (d) Function as object property
const person = {
  name: "Anil",
  sayName: function() {
    return `My name is ${this.name}`;
  }
};
console.log(person.sayName());