const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSumSubarray(arr) {
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}
// const start = performance.now();
// console.log(maxSumSubarray(array))
// const end = performance.now(); // End high-resolution timer
// console.log(`Execution Time: ${(end - start).toFixed(3)} ms`);

function maxSumSubarrayOptimized(arr) {
  let currentMax = arr[0];
  let maxSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    maxSoFar = Math.max(currentMax, maxSoFar);
  }
  return maxSoFar;
}

function generateLargeArray(size, min = -100, max = 100) {
  const array = [];
  for (let i = 0; i < size; i++) {
    // Generate a random integer between min and max
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
}

// Generate an array with 1 million elements
const largeArray = generateLargeArray(20 * 1000);

const start = performance.now();
console.log(maxSumSubarray(largeArray));
const end = performance.now(); // End high-resolution timer
console.log(`Execution Time: ${(end - start).toFixed(3)} ms`);

const start2 = performance.now();
console.log(maxSumSubarrayOptimized(largeArray));
const end2 = performance.now(); // End high-resolution timer
console.log(`Execution Time: ${(end2 - start2).toFixed(3)} ms`);
