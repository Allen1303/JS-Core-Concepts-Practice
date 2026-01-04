"use strict";
/*
========================================
📘 CLOSURE SYNTAX EXAMPLE
Private variables + returned object
----------------------------------------
function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; }
  };
}
========================================

========================================
💰 PROJECT 3 — Savings Goal Tracker
Concept: Closure with multiple private variables + controlled state updates
Goal: Practice returning an object with methods that modify internal values safely.
========================================

TASK 1:
Create a function createSavingsTracker(goalAmount)
Inside it create PRIVATE variables:
- goal = goalAmount
- saved = 0

Retcrn an object with:
√ add(amount) → add to saved
√ reset() → sets saved back to 0
√ getSaved() → returns saved
√ getGoal() → returns goal
√ getPercent() → returns (saved / goal) * 100

HINT:
All internal variables must stay private.

----------------------------------------

TASK 2:
When user clicks “Set Goal”
- Read goalInput value
- Create tracker = createSavingsTracker(goal)
- Hide goal input + button
- Show #trackerArea

Also update:
progressDisplay → "Progress: $0 / $goal"

----------------------------------------

TASK 3:
When “Add Savings” clicked:
- Read amountInput value
- Call tracker.add(amount)
- Update progress text:
  "Progress: $saved / $goal"
- Update percent text:
  "XX% Saved"

----------------------------------------

TASK 4:
When “Reset Savings” clicked:
- Call tracker.reset()
- Reset display values to:
  "$0 / $goal"
  "0% Saved"

----------------------------------------

TASK 5 (Optional Mini Challenge):
Inside the closure, prevent saved from exceeding goal.
If saved > goal:
- Cap it at goal
- OR show a message in the UI (“Goal Completed!”)
Your choice.

----------------------------------------

TASK 6 (Optional Extension):
Add another private variable:
- history = []

Each time
---------------------------------------------
*/

//Cache DOM Elements-------------------------
const goalInput = document.getElementById("goalInput");
const setGoalBtn = document.getElementById("setGoalBtn");
const trackerArea = document.getElementById("trackerArea");
const amountInput = document.getElementById("amountInput");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const progressDisplay = document.getElementById("progressDisplay");
const percentDisplay = document.getElementById("percentDisplay");
const historyList = document.getElementById("historyList");

//Task ➞ 1:
function createSavingsTracker(goalAmount) {
    let goal = goalAmount;
    let savedAmount = 0;
    let history = [];
    return {
        addAmount(amount) {
            //Task ➞ 5:
            if (savedAmount + amount > goal) {
                savedAmount = goal;
                history.push(`Capped at goal: ${savedAmount}`);

                alert("👏 Nice job!, you've achieved your savings goal");
            } else {
                savedAmount += amount;
                history.push(`Added $${amount} ➞ Total: $${savedAmount}`);
            }
        },
        reset() {
            savedAmount = 0;
            history = [];
        },
        getSavedAmount() {
            return savedAmount;
        },
        getGoal() {
            return goal;
        },
        getPercentSaved() {
            return (savedAmount / goal) * 100;
        },
        getHistory() {
            return history;
        },
    };
}
let savingsTracker;

// Task ➞ 2:
setGoalBtn.addEventListener("click", () => {
    const savingsGoal = Number(goalInput.value);
    savingsTracker = createSavingsTracker(savingsGoal);

    console.log("Goal is", savingsGoal, "dollars");

    //Automatically place the cursor inside the amount inout field
    amountInput.focus();

    goalInput.classList.add("hidden");
    setGoalBtn.classList.add("hidden");
    trackerArea.classList.remove("hidden");

    progressDisplay.textContent = `Progress: $${savingsTracker.getSavedAmount()} | $${savingsTracker.getGoal()}`;
});

//Task ➞ 3:
addBtn.addEventListener("click", () => {
    const amountAdded = Number(amountInput.value);
    savingsTracker.addAmount(amountAdded);

    progressDisplay.textContent = `Progress: $${savingsTracker.getSavedAmount()} | $${savingsTracker.getGoal()}`;
    percentDisplay.textContent = `${savingsTracker.getPercentSaved().toFixed(0)}% Saved`;

    // Task ➞ 6:
    const latestHistory = savingsTracker.getHistory().at(-1);

    const liElement = document.createElement("li");
    liElement.textContent = latestHistory;
    historyList.appendChild(liElement);
});

// Task ➞ 4:
resetBtn.addEventListener("click", () => {
    savingsTracker.reset();

    progressDisplay.textContent = `Progress:  $0 | $${savingsTracker.getGoal()}`;
    percentDisplay.textContent = `0% Saved`;

    amountInput.value = "";
    historyList.innerHTML = "";

    goalInput.classList.remove("hidden");
    setGoalBtn.classList.remove("hidden");
});
