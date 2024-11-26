function modifyValue(val) {
    val = 10; // This only changes the copy of the value
    console.log(val)
}

let num = 5;
modifyValue(num);
console.log(num); // Output: 5 (original value is not affected)


function modifyObject(obj) {
    obj.value = 10; // This changes the original object
}

let myObject = { value: 5 };
modifyObject(myObject);
console.log(myObject.value); // Output: 10 (original object is affected)

