function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
const person = { name: 'Charlie' };
const person1 = { name: 'Jane' };
const person2 = { name: 'Kay' };

const greetCharlie = greet.bind(person);
const greetJane = greet.bind(person1);
const greetKay = greet.bind(person2)

greetCharlie('Hey','!!!'); // Output: "Hey, Charlie!!!"
greetJane('Hello', '!'); // Output: "Hello, Jane!"
greetKay('Hi', '?'); // Output: "Hi, Kay?"


const obj = {
    name:"Vivek",
    getName: function(){
        console.log(this.name)
    },
    delayedGetName: function(){
        let self = this
        setTimeout(function(){
            console.log(self.name)
        }, 1000)
    }
}

//returns a new function bound the obj and doesn't invokes the function immediately
const getAnotherName = obj.getName.bind({name:"Divya"})
getAnotherName()
obj.delayedGetName()




