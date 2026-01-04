"use strict";

/*
Example (to include in each JS file):
// Object literal example
const person = {
  name: 'Alice',
  greet: function() {
    return `Hi, my name is ${this.name}`;
  }
};
console.log(person.greet()); // "Hi, my name is Alice"

// Constructor + prototype example
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  return `Hello, I am ${this.name}`;
};
const bob = new Person('Bob');
console.log(bob.sayHello()); // "Hello, I am Bob"

========================================
PROJECT 1 — Contact Card
Goal: Practice object literals and methods
========================================

TASK 1:
Create an object called 'contact' with:
- name
- phone
- email
- method greet() that returns "Hi, I'm NAME!"

TASK 2:
In button click event:
- Call contact.greet() and display it in #output

TASK 3:
Add a second method contact.info() that prints phone & email.

HINTS:
- Use `this.name` inside greet()
- Use template literals to format text
*/
