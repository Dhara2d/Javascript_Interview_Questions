function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Test case
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
