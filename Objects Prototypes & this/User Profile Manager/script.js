"use strict";
/*
========================================
📘 OBJECT SYNTAX EXAMPLE
----------------------------------------
const user = {
  name: "",
  age: 0,
  updateName(newName) {
    this.name = newName;
  }
};
========================================
*/

/*
========================================
👤 PROJECT 1 — User Profile Manager
Concept: Objects + methods + state updates
Goal: Use an object to store and update profile data.
========================================

TASK 1:
Create an object called userProfile with properties:
- name
- age

Add methods:
- setName(newName)
- setAge(newAge)

----------------------------------------

TASK 2:
When "Save Profile" button is clicked:
- Read values from inputs
- Call userProfile.setName()
- Call userProfile.setAge()

----------------------------------------

TASK 3:
Update the UI:
- Show "Name: ___"
- Show "Age: ___"

----------------------------------------

TASK 4 (Optional):
Add a resetProfile() method to clear user data and UI.

========================================
*/

//Cache DOM Elements

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const saveBtn = document.getElementById("saveBtn");
const profileName = document.getElementById("profileName");
const profileAge = document.getElementById("profileAge");
const resetBtn = document.getElementById("resetBtn");

//Task ➞ 1
const userProfile = {
    name: "",
    age: 0,
    setName(newName) {
        this.name = newName;
    },
    setAge(newAge) {
        this.age = Number(newAge);
    },

    //Task ➞ 4
    resetProfile() {
        this.name = "";
        this.age = 0;
    },
};
saveBtn.addEventListener("click", function () {
    //Task ➞ 2
    userProfile.setName(nameInput.value);
    userProfile.setAge(ageInput.value);
    console.log("Profile Saved:", userProfile);

    //Task ➞ 3
    profileName.textContent = `Name: — ${userProfile.name}`;
    profileAge.textContent = `Age: — ${userProfile.age}`;
});

//Task ➞ 4 continued
resetBtn.addEventListener("click", function () {
    userProfile.resetProfile();

    profileName.textContent = "Name: — ";
    profileAge.textContent = "Age: — ";

    nameInput.value = "";
    age.value = "";
});
