"use strict";
/**
 * TASK 1: DOM Selection
 * Select the buttons (sync, promise, timeout, reset)
 * and the containers (stack, micro-queue, macro-queue).
 */
const syncBtn = document.getElementById("sync-btn");
const promiseBtn = document.getElementById("promise-btn");
const timeoutBtn = document.getElementById("timeout-btn");
const resetBtn = document.getElementById("reset-btn");

const stack = document.getElementById("stack");
const microQue = document.getElementById("micro-queue");
const macroQue = document.getElementById("macro-queue");
/**
 * TASK 2: Helper Function - UI Management
 * Create a function 'renderTask(container, text, typeClass)'
 * - It should create a div, add the 'task-item' and 'typeClass' classes.
 * - Set the text content.
 * - Append it to the specified container.
 * - Provide a way to remove the task (HINT: use setTimeout to simulate "finishing" a task).
 */
const renderTask = function (container, text, typeClass) {
    const uiDiv = document.createElement("div");
    uiDiv.classList.add("task-item", typeClass);
    uiDiv.textContent = text;
    container.appendChild(uiDiv);
    setTimeout(() => {
        uiDiv.remove();
    }, 8000);
    return uiDiv;
};
/**
 * TASK 3: The Synchronous Task
 * When 'sync-btn' s clicked:
 * 1. Add a task to the 'stack' container immediately.
 * 2. Use a small delay (e.g., 500ms) to remove it from the stack.
 * HINT: This represents the Execution Context being created and then popped off.
 */
syncBtn.addEventListener("click", () => {
    renderTask(stack, "Sync Task", "sync-style");
});
/**
 * TASK 4: The Promise (Microtask) Task
 * When 'promise-btn' is clicked:
 * 1. Add a task to the 'micro-queue' container.
 * 2. Create a Promise.resolve().then(...)
 * 3. Inside the .then(), move the task from the 'micro-queue' to the 'stack'.
 * 4. After another small delay, remove it from the 'stack'.
 */
promiseBtn.addEventListener("click", async () => {
    const microTask = renderTask(microQue, "Promise task", "promise-style");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    stack.appendChild(microTask);
});
/**
 * TASK 5: The Timeout (Macrotask) Task
 * When 'timeout-btn' is clicked:
 * 1. Add a task to the 'macro-queue' container.
 * 2. Trigger a setTimeout() with a 0ms delay.
 * 3. Inside the setTimeout, move the task from 'macro-queue' to the 'stack'.
 * 4. After a small delay, remove it from the 'stack'.
 */
timeoutBtn.addEventListener("click", async () => {
    const macroTask = renderTask(macroQue, "Timeout task", "timeout-style");
    await new Promise((resolve) => setTimeout(resolve, 4000));
    stack.appendChild(macroTask);
});
/**
 * TASK 6: Reset Logic
 * When 'reset-btn' is clicked, clear the innerHTML of all three containers.
 */
//Helper Function for clearing all container UI
const clearContainer = function () {
    stack.innerHTML = "";
    microQue.innerHTML = "";
    macroQue.innerHTML = "";
};
resetBtn.addEventListener("click", clearContainer);
/* 
  THOUGHT EXERCISE AFTER COMPLETION:
  If you click "Timeout" then "Promise" then "Sync" very quickly, 
  in what order do they actually appear on the 'Call Stack' container? 
  The code you write will demonstrate the Event Loop's priority!
*/
