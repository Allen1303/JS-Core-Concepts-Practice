"use strict";
/*
========================================
📘 PROTOTYPE SYNTAX EXAMPLES
----------------------------------------

Constructor Function:
function Person(name) {
  this.name = name;
}

Prototype Method:
Person.prototype.sayHello = function () {
  return "Hello " + this.name;
};

Usage:
const p1 = new Person("Alex");
p1.sayHello();

----------------------------------------
Why Prototypes?
√ Methods are shared
√ Less memory usage
√ Core JavaScript behavior
========================================
*/

/*
========================================
📚 PROJECT — Library Book Tracker
Concepts:
√ Objects
√ Arrays of objects
√ Prototypal inheritance

Goal:
Build a small library system where
each book is an object created via
a constructor function.
========================================
*/

/*
----------------------------------------
TASK 1— Create Book Constructor
----------------------------------------
Create a constructor function called Book.

It should accept:
- title
- author

Inside the constructor:
- Assign both values using `this`

HINT:
function Book(title, author) {
  this.title = title;
  this.author = author;
}
----------------------------------------
*/

/*
----------------------------------------
TASK 2 — Add Prototype Method
----------------------------------------
Add a method called getSummary
to Book.prototype.

The method should return:
"Title by Author"

IMPORTANT:
√ Do NOT define this method inside the constructor
√ This is the prototype learning moment
----------------------------------------
*/

/*
----------------------------------------
TASK 3 — Create Library Array
----------------------------------------
Create an empty array called `library`.

This array will store Book objects.

Each time a book is added:
- Push the new Book into the array
----------------------------------------
*/

/*
----------------------------------------
TASK 4 — Handle Add Book Button
----------------------------------------
When the button is clicked:
- Read titleInput value
- Read authorInput value
- Create a new Book object
- Add it to the library array

BONUS THINKING:
Why is library an array of objects?
----------------------------------------
*/

/*
----------------------------------------
TASK 5 — Render Books to UI
----------------------------------------
Create a function renderLibrary()

Inside it:
- Clear the <ul>
- Loop through the library array
- For each book:
  - Create <li>
  - Display book.getSummary()
  - Append to the list

HINT:
forEach is your friend here
----------------------------------------
*/

/*
----------------------------------------
TASK 6 — Prove Prototype Sharing
----------------------------------------
After adding at least two books,
log the following:

console.log(
  library[0].getSummary === library[1].getSummary
);

EXPECTED RESULT:
true

WHY?
Because prototype methods are shared.
----------------------------------------
*/

/*
----------------------------------------
OPTIONAL TASK 7 — Extend the Prototype
----------------------------------------
Add another prototype method:
- rename(newTitle)

Update the book's title and
re-render the library.

This reinforces:
√ Object mutation
√ Prototype usage
----------------------------------------
*/

//TASK 1 — Create Book Constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
}
