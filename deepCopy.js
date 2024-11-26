function deepCopy(obj) {
  // Check if the input is not an object or is null, return it directly (handles primitive types)
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Handle arrays separately to ensure correct type and copying
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  // Create a new object for copying
  const copy = {};

  // Recursively copy each property
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "traveling"],
};

const copiedObject = deepCopy(original);

console.log(copiedObject);
// Modify the copied object to verify deep copy
copiedObject.address.city = "San Francisco";
copiedObject.hobbies.push("cooking");

console.log(original.address.city); // "New York" (unchanged)
console.log(original.hobbies); // ["reading", "traveling"] (unchanged)
