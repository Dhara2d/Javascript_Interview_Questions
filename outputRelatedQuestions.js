const number_val = [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }];
const number_val2 = [1,2,3,4,5,6];


const sum = number_val.reduce((accumulator, current) => accumulator + current.val, 0);
const sum2 = number_val2.reduce((accumulator, current) => accumulator + current, 0);


// console.log(sum, sum2);


const input = [1,2,3,4];
const completeArrayMultiple = input.reduce((accmulator, currentElement) => {
        accmulator *= currentElement;
        return accmulator;
    }, 1);
// console.log({completeArrayMultiple})
const output = [];
for(const element of input) {
    output.push(completeArrayMultiple/element);
}
// console.log(output);


// function abc(param) {
//     console.log(arguments)
//     arguments[0] = "hello";  
//     console.log(param);
// }
 
// abc();
// abc(1);