function convertCamelCaseToSnakeCase(str) {
    const strArr = str.split('');
    const newStrArr = [];
    for(const element of strArr) {
        if (element === element.toUpperCase()) {
            newStrArr.push('_');
            newStrArr.push(element.toLowerCase());
        }
        else {
            newStrArr.push(element);
        }
    }
    return newStrArr.join('');
}
function convertKeysToSnakeCase(input) {
    const output = {};
    for(const key in input) {
        output[convertCamelCaseToSnakeCase(key)] = input[key];
    }
    return output;
   
}
const input = { 
    firstName: "Ajeet", 
    lastName: "Kumar", 
    address: "Bangalore",
    dateOfBirth:"25/06/2016"
}
console.log(convertKeysToSnakeCase(input));



let string = "firstNameTestTestTest"

let output = []
for(let char of string){
    if(char === char.toUpperCase()){
        output.push("_")
        output.push(char.toLowerCase())

    }else{
        output.push(char)
    }
}

console.log(output.join(""))