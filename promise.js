// //creating promise

// const promise = new Promise((res, rej) => {
//     setTimeout(()=> res("Dharanidharan"), 1000)
// })


// //calling the promise using .then method
// promise
//     .then((val) => console.log(val))


// //reject handling of promise

// const promise2 = new Promise((res, rej) => {
//     setTimeout(()=> rej("Error found"), 1000)
// })

// promise2.then((val)=> console.log(val)).catch((err)=> console.log(err))


// //using async/await

// const result = async () => await promise;

// const logResult = async () => {
//     const value = await promise; // Await the Promise returned by result()
//     console.log(value); // Output: 1000
//   };
  
// logResult();



// await promise2


let promise3 = new Promise((res, rej) =>{
    setTimeout(()=> res("Data from 1 second delayed API"), 1000)
})


let promise4 = new Promise((res, rej) =>{
    setTimeout(()=> res("Data from 2 second delayed API"), 2000)
})


// Promise.all([promise3, promise4]).then((result) => console.log(result))


async function fetchData() {
    try {
        const results = await Promise.all([promise3, promise4]);
        console.log(results); // Array of resolved values
    } catch (error) {
        console.error('One of the promises rejected:', error);
    }
}

console.log("Start");
fetchData();
console.log("End");
