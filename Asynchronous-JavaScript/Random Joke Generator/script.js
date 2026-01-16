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
-----------------------------------------------------
TASK 1 — Cache DOM Elements
-----------------------------------------------------
Grab:
- jokeBtn
- status
- jokeCard
- setup
- punchline
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 2 — Create Async Function: fetchJoke()
-----------------------------------------------------
This function should:
- Fetch from the joke API
- Convert response to JSON
- Return the joke data

Endpoint:
https://official-joke-api.appspot.com/random_joke
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 3 — Button Click Handler
-----------------------------------------------------
When clicked:
- Show loading
- Disable button
- Call fetchJoke()
- Update UI
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 4 — Loading State
-----------------------------------------------------
Before fetch:
- status = "Loading..."
- Hide joke card
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 5 — Success State
-----------------------------------------------------
On success:
- Show joke card
- Display setup
- Display punchline
- Clear status
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 6 — Error State
-----------------------------------------------------
If anything fails:
- Show error message
- Hide joke card
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 7 — Final Cleanup
-----------------------------------------------------
In finally:
- Re-enable button
-----------------------------------------------------
*/
/*
=====================================================
📘 ASYNC + FETCH — REFERENCE SYNTAX (STUDY ONLY)
-----------------------------------------------------

Basic fetch:
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

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
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke",
        );
        if (!response.ok) throw new Error("Failed to fetch Joke!");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
    } finally {
    }
};
jokeBtn.addEventListener("click", () => {});
