"use strict";

/*
=====================================================
⏳ CONCEPT: Asynchronous JavaScript
PROJECT: Async Quote Loader
=====================================================

KEY IDEAS:
- JavaScript does NOT wait for slow tasks
- Promises represent future values
- async / await pauses execution WITHOUT blocking
- UI must reflect async state (loading / success / error)
=====================================================
*/

// Cache DOM elements
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const loadQuoteBtn = document.getElementById("loadQuoteBtn");
const status = document.getElementById("status");

//TASK 1 — Create Async Data Source
function fetchQuote() {
    //- Return a Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve({
                      text: `Success isn't owned, it's rented, and the rent is due everyday`,
                      author: `Allen`,
                  })
                : reject(`Failed to load Quote`);
        }, 1500);
    });
}
// Task 3 ➞ use async / await
async function loadQuote() {
    try {
        const quoteData = await fetchQuote();
        //Task ➞ 4 Success State management
        quoteText.textContent = quoteData.text;
        quoteAuthor.textContent = quoteData.author;
        status.textContent = "";
        loadQuoteBtn.disabled = false;

        //Task ➞ 5 Error state management.
    } catch (error) {
        status.textContent = error.message || error;
        status.style.color = "red"; //- Show error message in red
    } finally {
        //Optional: Re-enable the button to avoid repeating code.
        loadQuoteBtn.disabled = false; //- Enable button
    }
}
// TASK 2 — Handle Button Click Wire up event listener (logic goes inside loadQuote)
loadQuoteBtn.addEventListener("click", () => {
    loadQuoteBtn.disabled = true;
    status.textContent = "Loading...";
    status.style.color = "black";
    // Clear previous quote
    quoteText.textContent = "";
    quoteAuthor.textContent = "";
    loadQuote();
});
