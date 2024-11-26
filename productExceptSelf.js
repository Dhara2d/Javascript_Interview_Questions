function productExceptSelf(nums) {
  const length = nums.length;
  const result = Array(length).fill(1);

  // Left pass: Calculate left products
  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
    if (i === 3) console.log(result, leftProduct);
  }
  // Right pass: Calculate right products and multiply with left products
  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// Example usage:
const input = [1, 2, 3, 4];
const output = productExceptSelf(input);
console.log(output); // Output: [24, 12, 8, 6]
