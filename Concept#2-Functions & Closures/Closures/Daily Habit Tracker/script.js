/* 
========================================
📘 ADVANCED CLOSURE SYNTAX EXAMPLE
Returning an object with methods
----------------------------------------
function createCounter() {
  let count = 0;

  return {
    increment() { count++; },
    reset() { count = 0; },
    getCount() { return count; }
  };
}
========================================
*/

/*
========================================
🔥 PROJECT 2 — Daily Habit Tracker
Concept: Closures with private state + multi-method API
Goal: Practice closures that return an object containing multiple functions.
========================================

TASK 1:
Create a function createHabitTracker(habitName)
Inside it:
- Store "habitName" privately
- Store "count" privately (initial: 0)

Return an OBJECT containing these methods:
√ increment() — increase count
√ reset() — set count back to 0
√ getCount() — return the current count
√ getHabitName() — return the habit name

HINT:
All these methods must access private variables using closure.

----------------------------------------

TASK 2:
When user clicks “Start Tracking Habit”
- Read the habitInput value
- Create a tracker = createHabitTracker(habitName)
- Hide the habit input + start button
- Unhide #trackerArea so user can increment

----------------------------------------

TASK 3:
When "Add Completion" clicked:
- Call tracker.increment()
- Update #countDisplay with:
  "Count: X"

----------------------------------------

TASK 4:
When "Reset" clicked:
- Call tracker.reset()
- Update #countDisplay

----------------------------------------

TASK 5:
Show the habit name above the counter using:
tracker.getHabitName()

e.g.
"Tracking: Push Ups"

----------------------------------------

OPTIONAL TASK 6:
Add a weekly goal system using an additional private variable:
- goal = number
- method setGoal(newGoal)
- method getProgress() → (count / goal) * 100

========================================
*/
const habitInput = document.getElementById("habitInput");
const startBtn = document.getElementById("startBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const trackerArea = document.getElementById("trackerArea");
const countDisplay = document.getElementById("countDisplay");
// Task 6 Elements
const goalInput = document.getElementById("goalInput");
const setGoalBtn = document.getElementById("setGoalBtn");
const progressDisplay = document.getElementById("progressDisplay");

//Task 1:
function createHabitTracker(habitName) {
    let count = 0;
    let goal = 0;
    return {
        increment() {
            ++count;
            // console.log(`Incremented ${habitName} count to: ${count}`);
        },
        reset() {
            count = 0;
        },
        getCount() {
            return count;
        },
        getHabitName() {
            return habitName;
        },
        //Task 6
        setGoal(newGoal) {
            goal = newGoal;
        },
        getProgress() {
            return goal === 0 ? 0 : (count / goal) * 100;
        },
    };
}

// Task 2:
let tracker;
startBtn.addEventListener("click", () => {
    const nameOfHabit = habitInput.value;
    if (!nameOfHabit) return; // → validation check

    tracker = createHabitTracker(nameOfHabit);

    habitInput.classList.add("hidden");
    startBtn.classList.add("hidden");
    trackerArea.classList.remove("hidden");

    //Task 5:
    updateDisplay();
});
setGoalBtn.addEventListener("click", () => {
    const newGoal = Number(goalInput.value);
    if (newGoal > 0) {
        tracker.setGoal(newGoal);

        updateDisplay();
    } else {
        prompt("Please enter a goal number greater than 0");
    }
});

//Task 3:
incrementBtn.addEventListener("click", () => {
    tracker.increment();
    updateDisplay();
});

//Task 4:
resetBtn.addEventListener("click", () => {
    tracker.reset();
    habitInput.classList.remove("hidden");
    startBtn.classList.remove("hidden");
    trackerArea.classList.add("hidden");
    updateDisplay();
});

// Helper function that manages updating the UI (DRY Principle)
function updateDisplay() {
    const count = tracker.getCount();
    const habitName = tracker.getHabitName();
    const progress = tracker.getProgress();

    countDisplay.textContent = `Tracker: ${habitName} | Count: ${count}`;
    progressDisplay.textContent = `Progress: ${progress.toFixed(0)}%`;
}
