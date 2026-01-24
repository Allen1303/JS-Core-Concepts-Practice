"use strict";

//TASK 1 — Cache DOM Elements
const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const userCard = document.getElementById("userCard");

//TASK 2 — Create async function loadUser()
async function loadUser() {
    status.textContent = `Loading...`; // Show loading.. in status
    userCard.textContent = ""; // Clear previous user data
    try {
        // TASK 3 — Fetch User Data and Await the response
        const response = await fetch("https://randomuser.me/api/");
        // Safety check for modern development.
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json(); // await response.json()

        // TASK 4 — Extract Needed Data - first name - last name - email - profile picture
        const user = data.results[0];
        const {
            name: { first, last },
            email,
            picture: { large: profilePicture },
        } = user;

        console.log(first, last, email, profilePicture);

        // TASK 5 — Render User Card, Create HTML elements dynamically: - Image - Name - Email

        userCard.innerHTML = `
<img src="${profilePicture}" alt ="User Profile Picture">
<h3>${first} ${last}</h3>
<p>${email}</p>
`;
        // TASK 6 — Handle Errors
    } catch (error) {
        status.textContent = error.message || error;
        status.style.color = "crimson";
    } finally {
        if (status.textContent === "Loading...") {
            status.textContent = "User Loaded";
        }
    }
}
loadUser();

//TASK 7 — Button Event When button is clicked: - Call loadUser() function
loadBtn.addEventListener("click", loadUser);
// console.log(loadUser());
