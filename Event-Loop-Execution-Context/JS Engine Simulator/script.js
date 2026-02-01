"use strict";
/**
 * TASK 1: DOM Selection
 * Select the buttons (sync, promise, timeout, reset)
 * and the containers (stack, micro-queue, macro-queue).
 */

/**
 * TASK 2: Helper Function - UI Management
 * Create a function 'renderTask(container, text, typeClass)'
 * - It should create a div, add the 'task-item' and 'typeClass' classes.
 * - Set the text content.
 * - Append it to the specified container.
 * - Provide a way to remove the task (HINT: use setTimeout to simulate "finishing" a task).
 */

/**
 * TASK 3: The Synchronous Task
 * When 'sync-btn' is clicked:
 * 1. Add a task to the 'stack' container immediately.
 * 2. Use a small delay (e.g., 500ms) to remove it from the stack.
 * HINT: This represents the Execution Context being created and then popped off.
 */

/**
 * TASK 4: The Promise (Microtask) Task
 * When 'promise-btn' is clicked:
 * 1. Add a task to the 'micro-queue' container.
 * 2. Create a Promise.resolve().then(...)
 * 3. Inside the .then(), move the task from the 'micro-queue' to the 'stack'.
 * 4. After another small delay, remove it from the 'stack'.
 */

/**
 * TASK 5: The Timeout (Macrotask) Task
 * When 'timeout-btn' is clicked:
 * 1. Add a task to the 'macro-queue' container.
 * 2. Trigger a setTimeout() with a 0ms delay.
 * 3. Inside the setTimeout, move the task from 'macro-queue' to the 'stack'.
 * 4. After a small delay, remove it from the 'stack'.
 */

/**
 * TASK 6: Reset Logic
 * When 'reset-btn' is clicked, clear the innerHTML of all three containers.
 */

/* 
  THOUGHT EXERCISE AFTER COMPLETION:
  If you click "Timeout" then "Promise" then "Sync" very quickly, 
  in what order do they actually appear on the 'Call Stack' container? 
  The code you write will demonstrate the Event Loop's priority!
*/
