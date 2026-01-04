"use strict";
/* 
========================================
📘 CLOSURE SYNTAX EXAMPLE
----------------------------------------
function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    return counter;
  }
}
========================================
*/

/*
========================================
🔐 PROJECT 1 — Username Generator
Concept: ClosuresGoal: Use a closure to maintain a count and generate unique usernames.
========================================

TASK 1:
Create a function createUsernameGenerator()
- Inside, keep a private counter (e.g., let count = 1)
- Return a function that:
  - Takes a name
  - Returns name + count
  - Increments count after each use

HINT:
Use a closure so count persists across calls.

----------------------------------------

TASK 2:
Above your event listener:
- Create a generator instance:
  const generate = createUsernameGenerator();

----------------------------------------

TASK 3:
Button click:
- Get the user name from the input
- Use generate(name) to produce a username
- Display result in <h2>

----------------------------------------

TASK 4:
Validation:
- If input is empty → show a friendly error message

========================================
*/
const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

function generateUsername() {
    let counter = 0;
    return (name) => {
        // returns the value of the counter, then increments the counter immediately
        return name + counter++;
    };
}

const generate = generateUsername();
generateBtn.addEventListener("click", () => {
    const input = nameInput.value;
    if (input === "") {
        result.textContent = "🛑 Username field cannot be empty!";
    } else {
        const username = generate(input);
        result.textContent = username;

        nameInput.focus();
    }
});
