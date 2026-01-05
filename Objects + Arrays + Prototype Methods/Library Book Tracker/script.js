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

//Cache DOM Manipulation Elements
const bookTitle = document.getElementById("titleInput");
const bookAuthor = document.getElementById("authorInput");
const addBook = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");

// Task ➞ 3 Create an empty array called `library`. This array will store Book objects.
const library = [];
//TASK 1 — Create Book Constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
}

//TASK 2 — Add Prototype Method Add a method called getSummary that returns title by author
Book.prototype.getSummary = function () {
    return `${this.title} by ${this.author}`;
};

// TASK 7 — Extend the Prototype by adding another Prototype method: rename(newTitle)
// Book.prototype.rename = function (newTitle) {
//     //Update book's Title name
//     this.title = newTitle;
//     // Call renderLibrary function to update the UI
//     renderLibrary();
//
//     return (this.title = newTitle);
// };
//TASK 4 — Handle Add Book Button
addBook.addEventListener("click", () => {
    //- Read titleInput value and Read authorInput value
    const title = bookTitle.value;
    const author = bookAuthor.value;
    if (!title || !author) return;
    // - Create a new Book object

    const newBook = new Book(title, author);
    //Add each book to the library array
    library.push(newBook);

    // Test getSummary and rename methods
    console.log(`The book is ${newBook.getSummary()}`);
    // console.log("The book title is now", library[0].rename("Keep Learning"));

    //(Optional but good) Clear the values for the next entry
    bookTitle.value = "";
    bookAuthor.value = "";

    // Call the helper function renderLibrary()
    renderLibrary();
});

//TASK 5 — Render Books to UI helperr function
const renderLibrary = function () {
    // Clear the <ul>
    bookList.innerHTML = " ";
    //Loop through library array
    library.forEach((book, index) => {
        const li = document.createElement("li");
        // --- FLEXBOX STYLING ---
        li.style.display = "flex";
        li.style.justifyContent = "space-between"; // Pushes text left, icon right
        li.style.alignItems = "center"; // Keeps them vertically centered
        li.style.width = "300px"; // Set a fixed width or use 100%
        li.style.marginBottom = "8px";

        //Create dynamic delete button logic
        const htmlSpan = document.createElement("span");
        // Set the list item textContent to = getSummary logic
        htmlSpan.textContent = book.getSummary();

        //Dynamically create the delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&#10006"; //Unicode large X
        //JS color stlying
        deleteBtn.style.fontSize = "1.4rem";
        deleteBtn.style.color = "#ff4d4d";

        //Basic JS styling
        deleteBtn.style.background = "none";
        deleteBtn.style.border = "none";

        //Delete button logic
        deleteBtn.addEventListener("click", () => {
            //Remove a book from the array using the index of the book
            library.splice(index, 1);

            //Re-render the UI to display updated list
            renderLibrary();
        });

        // Append new the dynamically created span and list elements to ul element to the book list
        li.appendChild(htmlSpan);
        li.appendChild(deleteBtn);
        bookList.appendChild(li);

        // TASK 6 — Prove Prototype Sharing (Moved outside the loop for safety)
        if (library.length >= 2) {
            console.log(
                "Prototype Methods Shared:",
                library[0].getSummary === library[1].getSummary,
            );
        }
    });
};
