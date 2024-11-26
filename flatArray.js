function flattenArray(arr) {
  const result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flatten(item);
      }
    } else {
      result.push(element);
    }
  }

  // Start the flattening process
  flatten(arr);
  return result;
}

// Test case
const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

Array.prototype.flatten = function (result = []) {
  for (let element of this) {
    if (Array.isArray(element)) {
      element.flatten(result); // Recursively flatten inner arrays
    } else {
      result.push(element); // Add non-array elements directly to result
    }
  }
  return result;
};

Array.prototype.customLength = function () {
  return this.length;
};

console.log(flatArray.customLength(), "asdf");

// Test case
const nestedArray2 = [1, [2, [3, 4, [9, 10, 13, [14]]], 5], [6, 7], 8];
const flatArray2 = nestedArray2.flatten();
console.log(flatArray2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(flatArray2));

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  d: {
    e: {
      f: 3,
    },
  },
};

//output

// 1
//   2
//     3

let a = [];
let b = {};
const c = a ?? b;
