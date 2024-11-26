function customReduce(fn, initialValue) {
  const arr = this;
  let accmulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    let newAccmulator = fn(accmulator, arr[i]);
    accmulator = newAccmulator;
  }
  return accmulator;
}

Array.prototype.customReduce = customReduce;

let numbers = [1, 2, 3, 4, 5];

let result = numbers.customReduce((accumulator, currentElement) => {
  accumulator += currentElement;
  return accumulator;
}, 0);

console.log(result);

function customReduce2(fn, initialValue) {
  let arr = this;
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue ? 1 : 0;
  for (let i = startIndex; i < arr.length; i++) {
    let newAccmulator = fn(accumulator, arr[i]);
    accumulator = newAccmulator;
  }
  return accumulator;
}

Array.prototype.customReduce2 = customReduce2;

let result2 = numbers.customReduce2((accumulator, currentElement) => {
  accumulator *= currentElement;
  return accumulator;
}, 1);

const number_val = [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }];

let result3 = number_val.customReduce2((acc, current) => {
  console.log(current, acc);

  return acc * current.val;
}, 1);

console.log(result2);
console.log(result3);

let test = 0;
let result4 = test ? "test" : "false";

console.log(result4);

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

arr.unshift(0);

console.log(arr);

function customMap(fn) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

Array.prototype.customMap = customMap;

const result1 = arr.customMap((item, index, arr) => {
  console.log(item, index, arr);
  return item * 2;
});
console.log(result1);
