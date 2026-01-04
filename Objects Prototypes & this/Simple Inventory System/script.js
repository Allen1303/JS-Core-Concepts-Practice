"use strict";

/*
========================================
📘 OBJECT + ARRAY SYNTAX EXAMPLE
----------------------------------------
const store = {
  items: [],
  addItem(item) {
    this.items.push(item);
  }
};
========================================
*/

/*
========================================
📦 PROJECT 2 — Inventory System
Concept: Objects with arrays + object methods
Goal: Manage a list of items using an object.
========================================

TASK 1:
Create an object inventory with:
- items (array)

Methods:
- addItem(name, quantity)
- getItems()

----------------------------------------

TASK 2:
When "Add Item" is clicked:
- Read input values
- Call inventory.addItem()

----------------------------------------

TASK 3:
Loop through inventory.getItems()
- Render each item as:
  "Item Name (Qty: X)"

----------------------------------------

TASK 4 (Optional):
If item already exists:
- Increase quantity instead of adding duplicate

----------------------------------------

TASK 5 (Optional Challenge):
Add removeItem(name) method.

========================================
*/
// Cache DOM Elements---------------------
const itemInput = document.getElementById("itemInput");
const qtyInput = document.getElementById("qtyInput");
const addItemBtn = document.getElementById("addItemBtn");
const inventoryList = document.getElementById("inventoryList");
const removeBtn = document.getElementById("removeBtn");

// Task ➞ 1
const inventory = {
    items: [],
    addItem(name, quantity) {
        //Task ➞ 4 If item already exists: - Increase quantity instead of adding duplicate
        const existingItem = this.items.find(
            (item) => item.name.toLowerCase() === name.toLowerCase(),
        );
        if (existingItem) {
            existingItem.quantity += Number(quantity);
            console.log(`Updated ${name} quantity.`);
        } else {
            // Create a small object for accessing each item
            const newItem = {
                name: name,
                quantity: Number(quantity),
            };
            // Access and push the array and the new object into it.
            this.items.push(newItem);
            console.log(`Added new Item: ${nane}`);
        }
    },
    getItems() {
        return this.items;
    },

    // TASK 5 removing an existing Item:
    removeItem(name) {
        this.items = this.items.filter(
            (item) => item.name.toLowerCase() !== name.toLowerCase(),
        );
    },
};

//Task ➞ 3 Helper function for displaying items
const displayInventory = function () {
    inventoryList.innerHTML = "";

    inventory.getItems().forEach((item) => {
        const list = document.createElement("li");

        list.textContent = `${item.name} Qty: ${item.quantity}`;

        inventoryList.appendChild(list);
    });
};

//Task ➞ 2
addItemBtn.addEventListener("click", function () {
    inventory.addItem(itemInput.value, qtyInput.value);
    console.log("Current Inventory:", inventory.getItems());

    displayInventory();

    itemInput.value = "";
    qtyInput.value = "";
});

// Task ➞ 5 addEventListener logic
removeBtn.addEventListener("click", function () {
    const itemNameRemoved = itemInput.value;
    inventory.removeItem(itemNameRemoved);

    displayInventory();
    itemInput.value = " ";
});
