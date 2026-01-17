"use strict";

/*
=====================================================
😂 PROJECT: Random Joke Generator
Concepts:
✓ Fetch API
✓ Promises
✓ async / await
✓ Error handling
✓ UI state management
=====================================================
*/

/*
=====================================================
📘 ASYNC + FETCH — REFERENCE SYNTAX 
-----------------------------------------------------
Async / await version:
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
-----------------------------------------------------
*/

//TASK 1 — Cache DOM Elements
const jokeBtn = document.getElementById("jokeBtn");
const status = document.getElementById("status");
const jokeCard = document.getElementById("jokeCard");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

//TASK 2 — Create Async Function: fetchJoke()
const fetchJoke = async () => {
    const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
    );
    if (!response.ok) {
        throw new Error("Failed to fetch Joke!");
    }
    const data = await response.json();
    console.log(data);
    return data;
};
fetchJoke();
//TASK 3 — Button Click Handler
jokeBtn.addEventListener("click", async () => {
    try {
        status.textContent = "Loading..."; //- Show loading

        //TASK 4 — Loading State
        jokeCard.style.display = "none"; //- Hide joke card

        jokeBtn.disabled = true; //- Disable button

        const joke = await fetchJoke(); //- Call fetchJoke()

        //TASK 5 — Success State

        jokeCard.style.display = "block"; //- Show joke card
        setup.textContent = joke.setup; //- Display setup

        punchline.textContent = joke.punchline; //- Display punchline
        punchline.style.fontStyle = "italic";
        punchline.style.color = "blue";
        status.textContent = ""; //- Clear status
    } catch (error) {
        // TASK 6 — Error State
        status.textContent = error.message || "Joke not loaded"; //- Show error message
        jokeCard.style.display = "none"; //- Hide joke card
    } finally {
        //TASK 7 — Final Cleanup
        jokeBtn.disabled = false; // restore button state
    }
});
