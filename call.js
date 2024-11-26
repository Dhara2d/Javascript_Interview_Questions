function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
const person = { name: 'Alice' };
const person1 = { name: 'Jane' };
const person2 = { name: 'Kay' };

  
greet.call(person, 'Hello', '!'); // Output: "Hello, Alice!"
greet.call(person1, 'Hello', '!'); // Output: "Hello, Jane!"
greet.call(person2, 'Hello', '!'); // Output: "Hello, Kay!"

  