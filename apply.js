function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
const person = { name: 'Bob' };
const person1 = { name: 'Jane' };
const person2 = { name: 'Kay' };
  

greet.apply(person, ['Hi', '?']); // Output: "Hi, Bob?"
greet.apply(person1, ['Hello', '!']); // Output: "Hello, Jane!"
greet.apply(person2, ['Welcome', '!']); // Output: "Welcome, Kay!"

  