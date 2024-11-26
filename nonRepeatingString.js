function firstNonRepeatingChar(str) {
    const charCount = {};
  
    // Step 1: Create frequency map
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Step 2: Find the first non-repeating character
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null; // Return null if no non-repeating character is found
  }
  
  // Example usage:
  console.log(firstNonRepeatingChar("AADDCCFFEFSESY")); // Output: "w"
  