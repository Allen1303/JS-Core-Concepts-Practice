"use strict";

/*
========================================
📘 OBJECT METHOD / THIS SYNTAX EXAMPLE
----------------------------------------
const cart = {
  count: 0,
  add() {
    this.count++;
  },
  remove() {
    this.count--;
  }
};
========================================
*/

/*
========================================
🛒 PROJECT 2 — Cart Counter
Concept: Object Methods + this
Goal: Practice updating object state via methods.
========================================

TASK 1:
Create an object cart:
- count property starting at 0
- add() method increases count
- remove() method decreases count BUT not below 0

HINT:
Use 'this' inside each method.

----------------------------------------

TASK 2:
When "Add Item" clicked:
- Call cart.add()
- Update the <h2> display

----------------------------------------

TASK 3:
When "Remove Item" clicked:
- Call cart.remove()
- Update the <h2>

----------------------------------------

TASK 4:
Create a helper method in the object:
formatCount()
- Returns: "Items: " + this.count

Use this to keep UI consistent.

========================================
*/
//------Cache DOM Elements-----------------
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const countDisplay = document.getElementById("countDisplay");
//Task ➞ 1:
const cart = {
    count: 0,
    add() {
        this.count++;
    },
    remove() {
        if (this.count > 0) this.count--;
    },
    //Task ➞ 4
    formatCount() {
        return `Items: ${this.count}`;
    },
};

//Task ➞ 2:
addBtn.addEventListener("click", function () {
    cart.add();
    countDisplay.textContent = cart.formatCount();
    console.log(`Current count is now: ${cart.count}`);
});

//Task ➞ 3:
removeBtn.addEventListener("click", function () {
    cart.remove();
    countDisplay.textContent = cart.formatCount();
    console.log(`Current count is now: ${cart.count}`);
});
