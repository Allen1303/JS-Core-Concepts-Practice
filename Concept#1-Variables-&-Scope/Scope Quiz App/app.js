"use strict";
/*
=====================================================
CONCEPT: Scope & Variables
PROJECT: Scope Quiz App
=====================================================

EXAMPLE TO STUDY:
{
  let x = 10;
}
console.log(x); // ReferenceError

KEY TAKEAWAYS:
- let/const variables do NOT exist outside their block.
- This is critical for writing predictable code.
-----------------------------------------------------
*/

/*
TODO 1:
When any answer button is clicked, check the data-answer attribute.

HINT 1:
Use event.target.dataset.answer

TODO 2:
Show feedback in #feedback:
- “Correct!” (green)
- “Try again.” (red)

HINT 2:
You can style using:
feedback.style.color = "green" OR "red"

TODO 3:
Add a second question (your choice) to reinforce the same concept.

HINT 3:
Store questions in an array, or swap text manually.

=====================================================
*/

document.addEventListener("DOMContentLoaded", () => {
    const quizBox = document.getElementById("quizBox");
    const feedback = document.getElementById("feedback");

    quizBox.addEventListener("click", (e) => {
        // feedback.textContent = "";
        if (!e.target.matches("button")) return;

        //  Quiz logic goes here (no solution provided)
        const clickBtn = e.target;
        const answer = clickBtn.dataset.answer;

        // const answer = clickBtn.getAttribute("data-answer");
        if (answer === "correct") {
            feedback.innerHTML = `✅ <strong>Correct, good job!</strong>`;
        } else {
            feedback.innerHTML = `❌ <strong> Wrong, try again!</strong>`;
        }
    });
});
