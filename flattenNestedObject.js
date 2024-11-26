function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    console.log(fullKey);
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], fullKey, result);
    } else {
      result[fullKey] = obj[key];
    }
  }
  return result;
}

const obj = { a: { b: { c: 1 } } };
// Output: { 'a.b.c': 1 }
console.log(flattenObject(obj));
console.log(obj);

const flattenObject2 = (obj, parentKey = "", result = {}) => {
  for (let key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject2(obj[key], fullKey, result);
    } else {
      result[fullKey] = obj[key];
    }
  }

  return result;
};

console.log(flattenObject2(obj));
