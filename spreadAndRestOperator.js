//Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // Creates a new array, copying elements from arr1
console.log(arr2); // Output: [1, 2, 3]

arr1.push(6);

console.log(arr2); // Output: [1, 2, 3]

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]

const numbers = [1, 2, 3];
function add(a, b, c) {
  return a + b + c;
}
console.log(add(...numbers));

const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Engineer" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: "Alice", age: 25, job: "Engineer" }

//Rest Operator => converts to array or separate object

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest);

const { name, ...rest1 } = { name: "Alice", age: 25, job: "Engineer" };
console.log(name); // Output: Alice
console.log(rest1); // Output: { age: 25, job: "Engineer" }
