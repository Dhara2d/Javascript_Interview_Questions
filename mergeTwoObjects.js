function deepMerge(target, source) {
  for (let key in source) {
    if (source[key] && typeof source[key] === "object") {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

let obj1 = { name: "dharanidharan", age: "21" };
let obj2 = {
  phoneNumber: "9629427269",
  address: { streetName: "Gandhi Street", doorNo: 3, pincode: "638456" },
};

console.log(deepMerge(obj1, obj2));
