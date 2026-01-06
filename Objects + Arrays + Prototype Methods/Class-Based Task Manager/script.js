"use strict";
/*
========================================
📘 CLASS SYNTAX EXAMPLE
----------------------------------------
class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}
========================================
*/

/*
========================================
📝 PROJECT — Task Manager (Classes)
Concepts:
√ Objects
√ Arrays of objects
√ Prototypal inheritance (class syntax)

Goal:
Understand how ES6 classes map directly
to JavaScript’s prototype system.
========================================
*/

/*
----------------------------------------
TASK 1 — Create Task Class
----------------------------------------
Create a class called Task.

Constructor should accept:
- name

Inside constructor:
- set this.name
- set this.completed = false
----------------------------------------
*/

/*
----------------------------------------
TASK 2 — Add Class Method
----------------------------------------
Add a method toggleComplete()

Behavior:
- Flip the value of this.completed
(true → false, false → true)

QUESTION:
Where is this method stored internally?
(Hint: prototype)
----------------------------------------
*/

/*
----------------------------------------
TASK 3 — Create Tasks Array
----------------------------------------
Create an empty array called tasks.

This array will:
- Store Task objects
- Act as application state
----------------------------------------
*/

/*
----------------------------------------
TASK 4 — Handle Add Task Button
----------------------------------------
When button is clicked:
- Read taskInput value
- Create new Task object
- Push it into tasks array
- Clear input
- Call renderTasks()
----------------------------------------
*/

/*
----------------------------------------
TASK 5 — Render Tasks to UI
----------------------------------------
Create renderTasks() function.

Inside it:
- Clear <ul>
- Loop through tasks array
- For each task:
  - Create <li>
  - Display task.name
  - Add a button:
    "Complete" / "Undo"
----------------------------------------
*/

/*
----------------------------------------
TASK 6 — Toggle Task State
----------------------------------------
When toggle button clicked:
- Call task.toggleComplete()
- Re-render UI

BONUS:
If task.completed === true
- Apply line-through styling
----------------------------------------
*/

/*
----------------------------------------
TASK 7 — Prove Prototype Sharing
----------------------------------------
After adding at least two tasks, log:

tasks[0].toggleComplete === tasks[1].toggleComplete

EXPECTED RESULT:
true

WHY?
Because class methods live on the prototype.
----------------------------------------
*/

/*
----------------------------------------
OPTIONAL TASK 8 — Delete Task
----------------------------------------
Add a delete button per task.

When clicked:
- Remove task from array
- Re-render UI

This reinforces:
√ Arrays
√ Object references
√ UI reactivity
----------------------------------------
*/
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Task 3 ➞ Create an empty array called tasks. This array will: - Store Task objects - Act as application state
const tasks = [];

//TASK 1 — Create Task Class with completed property.
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    // Task 2 ➞ Add a method toggleComplete() Flip the value of this.completed
    toggleComplete() {
        this.completed = !this.completed;
    }
}

//TASK 4 — Handle Add Task Button
addTaskBtn.addEventListener("click", function () {
    const taskName = taskInput.value; // Read taskInput value

    if (!taskName) return; // Prevent empty values.

    const newTask = new Task(taskName); //- Create new Task object
    tasks.push(newTask); //- Push it into tasks array

    console.log(`Log task is ${taskName}`);

    taskInput.value = ""; // Clear input
    taskInput.focus();

    renderTasks(); // Call helper function to display tasks
});

//TASK 5 — Render Tasks to UI
const renderTasks = () => {
    taskList.innerHTML = ""; // Clear the <ul>
    //Loop through task Array
    tasks.forEach((task, taskIndex) => {
        const li = document.createElement("li"); // Create list element
        //---- Flexbox Styling with JS ------
        li.style.justifyContent = "space-between"; // Pushes span left, checkbox right
        li.style.alignItems = "center"; // Vertically centers them
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #eee";

        //Use span element to hold the task name, prevent checkbox from getting removed
        const spanElement = document.createElement("span");
        spanElement.textContent = task.name;

        //- Apply line-through styling
        spanElement.style.textDecoration = task.completed
            ? "line-through"
            : "none";
        // container for delete and checkbox event listener action
        const container = document.createElement("div");
        // style the container using JS styling
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.gap = "0.375rem";

        //Create a checkbox instead of a standard button
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        // checkbox  state "Complete" / "Undo"
        checkbox.checked = task.completed;

        // --- 2. CHECKBOX SIZE ---
        checkbox.style.width = "20px"; // Makes it bigger
        checkbox.style.height = "20px"; // Makes it bigger
        checkbox.style.cursor = "pointer";
        checkbox.style.marginLeft = "0.625rem";

        // TASK 6 — Toggle Task State
        checkbox.addEventListener("change", () => {
            //When checkbox  clicked call task.toggleComplete()
            task.toggleComplete();
            renderTasks(); // Re-render UI
        });

        //OPTIONAL TASK 8 — Create a Delete Task button
        const deleteBtn = document.createElement("button");

        deleteBtn.innerHTML = "&#10006"; //Unicode large X

        //Styling for delete button
        deleteBtn.style.fontSize = "1.6rem";
        deleteBtn.style.color = "#ff4d4d";
        deleteBtn.style.background = "none";
        deleteBtn.style.border = "none";
        deleteBtn.style.marginBottom = "0.635rem";

        // Delete button event listener logic
        deleteBtn.addEventListener("click", () => {
            tasks.splice(taskIndex, 1); // Remove task from array

            renderTasks(); // Re-render UI
        });
        container.appendChild(checkbox);
        container.appendChild(deleteBtn);

        li.appendChild(spanElement);
        li.appendChild(container);

        taskList.appendChild(li);

        // TASK 7 — Prove Prototype Sharing (Moved outside the loop for safety)
        if (tasks.length >= 2) {
            console.log(
                "Prototype Methods Shared:",
                tasks[0].toggleComplete === tasks[1].toggleComplete,
            );
        }
    });
};
