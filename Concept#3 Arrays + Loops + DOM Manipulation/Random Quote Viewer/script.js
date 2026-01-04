/*
========================================
📘 ARRAY + LOOP SYNTAX EXAMPLE
----------------------------------------
const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

========================================
💬 PROJECT 3 — Random Quote Viewer
Concept: Arrays + Loops + DOM Manipulation
Goal: Practice using arrays and selecting a random element.
========================================

TASK 1:
Create an array 'quotes' with at least 6 quote strings.

----------------------------------------

TASK 2:
Create a function getRandomQuote()
- Should loop through array (just for practice)
- Return one random quote
HINT:
Use:
Math.floor(Math.random() * quotes.length)

----------------------------------------

TASK 3:
On button click:
- Call getRandomQuote()
- Display the quote in <p id="quoteDisplay">

----------------------------------------

TASK 4:
Add a helper function truncateQuote(quote)
- If quote > 100 chars → slice to 100 + "..."

----------------------------------------

TASK 5 (Optional):
Fade-in animation using JS classList toggle.

========================================
*/

//Cache DOM Elements---------------------
const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

const quotes = [
    "Compound interest isn't just for money; it's for your habits too.",
    "The best time to start was yesterday. The second best time is right now.",
    "Focus on the process, and the profit will take care of itself.",
    "Your network is your net worth. Build bridges, not walls.",
    "Consistency beats intensity every single time.",
    "Don't lower the goal; increase the effort.",
];
// Task ➞ 2
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
    // for (let i = 0; i < quotes.length; i++) {
    //console.log("Checking quote at index", i);
    //     if (i === quoteIndex) {
    //         return quotes[i];
    //     }
    // }
}
// Task ➞ 4
function truncateQuote(quote) {
    if (quote.length > 100) {
        return `${quote.slice(0, 100)}...`;
    }
    return quote;
}

// Task ➞ 3
quoteBtn.addEventListener("click", () => {
    const randomQuote = getRandomQuote();

    quoteDisplay.textContent = truncateQuote(randomQuote);

    quoteDisplay.classList.toggle("fade-in");
});
