function isDeepEqual(obj1, obj2) {
  //   console.log(obj1, obj2);
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key]))
      return false;
  }
  return true;
}

const obj = {
  name: "dharanidharan",
  age: 21,
  address: { streetName: "Gandhi Street", doorNo: 3, pincode: "638456" },
};
const obj1 = {
  name: "dharanidharan",
  age: 21,
  address: { streetName: "Gandhi Street", doorNo: 3, pincode: "638456" },
};

console.log(isDeepEqual(obj, obj1));
