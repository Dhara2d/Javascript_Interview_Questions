const greetUser =(name, cb) =>{
    console.log(`Hi, ${name}`)
    cb()
}

let callback = ()=> console.log("User has been greeted")
greetUser("Dharanidharan", callback)



function sum(n){
    // console.log(n)
    if(n <= 0) return n;
    return n + sum(n-1)
}

console.log(sum(3))