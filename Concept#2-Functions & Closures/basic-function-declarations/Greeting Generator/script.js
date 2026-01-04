"use strict";

/* Include functions intro above this */

/*
========================================
👋 PROJECT 2 TASKS — Greeting Generator
Goal: Practice parameters + returning different values based on logic
========================================

TASK 1:
Create a function getGreeting(name):
- If name is empty → return "Please enter your name."
- Otherwise → return "Hello, NAME! Hope you’re having a great day!"

HINT:
Use an if statement inside a function.

----------------------------------------

TASK 2:
In the button click event:
- Read name input
- Call getGreeting(name)
- Show result inside #output

----------------------------------------

TASK 3:
Create a second function getTimeMessage() that returns:
- "Good morning!" before 12
- "Good afternoon!" between 12–5
- "Good evening!" after 5

HINT:
Use `new Date().getHours()`
========================================
*/
//Cache Dom Elemnets---------------------------------------
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const output = document.getElementById("output");

const getGreeting = function (name) {
    return name.trim() === ""
        ? "Please enter your name"
        : ` ${name}, Hope you're having a great day!`;
};

const getTimeMessage = function () {
    const time = new Date().getHours();
    let message = "";
    if (time < 12) {
        message = "Good morning!";
    } else if (time >= 12 && time < 17) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }
    return message;
};

greetBtn.addEventListener("click", () => {
    let nameEntered = nameInput.value.trim();
    let greetingMeessage = getGreeting(nameEntered);
    let timeMessage = getTimeMessage();

    if (nameEntered.trim() === "") {
        output.textContent = greetingMeessage;
    } else {
        output.textContent = `${timeMessage}, ${greetingMeessage}`;
    }
});
