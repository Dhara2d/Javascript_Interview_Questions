// //Example 1 using var

// console.log(x); // Output: undefined
// var x = 5;
// console.log(x); // Output: 5


//Example 2: let and const

// console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // Output: 10

// console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
// const z = 15;
// console.log(z); // Output: 15


//Example 3: Function Declaration

// greet(); // Output: Hello, world!

// function greet() {
//     console.log('Hello, world!');
// }


// Example 4: Function Expression

// sayHello(); // Output: TypeError: sayHello is not a function

// var sayHello = function() {
//     console.log('Hello!');
// };


//Difference between function declaration and arrow function

hoistedFunction();  // This works, outputs "I am hoisted!"

function hoistedFunction() {
  console.log("I am hoisted!");
}


hoistedArrowFunction();  // Error: Cannot access 'hoistedArrowFunction' before initialization

const hoistedArrowFunction = () => {
  console.log("I am not hoisted!");
};


//var is hosited and let and const are not hoisted
//function declaration are hoisted but function expression are not hoisted