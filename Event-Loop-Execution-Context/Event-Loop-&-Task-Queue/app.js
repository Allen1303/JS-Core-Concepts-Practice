/**
 * EXERCISE 2: Event Loop & Task Queue Visualizer
 *
 * LEARNING OBJECTIVES:
 * - Understand how the Event Loop works in JavaScript
 * - Visualize the Task Queue (Callback Queue)
 * - Learn how asynchronous operations are handled
 * - Understand the relationship between Call Stack, Web APIs, Task Queue, and Event Loop
 *
 * YOUR TASKS:
 * Complete the functions below to create a working event loop visualizer.
 * This builds on Exercise 1 by adding asynchronous behavior.
 */

// Get DOM elements
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const callStack = document.getElementById("callStack");
const webAPIs = document.getElementById("webAPIs");
const taskQueue = document.getElementById("taskQueue");
const eventLoop = document.getElementById("eventLoop");
const executionLog = document.getElementById("executionLog");

// Global state
let executionStep = 0;

/**
 * TASK 1: Implement addToCallStack()
 *
 * WHAT THIS DOES: Adds a function to the call stack visualization
 *
 * STEPS TO COMPLETE:
 * 1. Create a new div element
 * 2. Add the class "stack-item" to it
 * 3. Set its innerHTML to include:
 *    - An h4 tag with the function name
 *    - A p tag with text "Executing..."
 * 4. Append it to the callStack element
 *
 * EXAMPLE STRUCTURE:
 * <div class="stack-item">
 *   <h4>functionName</h4>
 *   <p>Executing...</p>
 * </div>
 *
 * HINT: This is similar to Exercise 1's addToStack function!
 */
function addToCallStack(functionName) {
    const stackDiv = document.createElement("div"); // * 1. Create a new div element
    stackDiv.classList.add("stack-item");
    //  Set its innerHTML to include: - An h4 tag with the function name - A p tag with text "Executing..."
    stackDiv.innerHTML = `
<h4>${functionName}</h4>
<p>Executing...</p>
`;
    callStack.appendChild(stackDiv); // Append it to the callStack element
}

/**
 * TASK 2: Implement removeFromCallStack()
 *
 * WHAT THIS DOES: Removes the top function from the call stack
 *
 * STEPS TO COMPLETE:
 * 1. Get the last child of callStack using: callStack.lastElementChild
 * 2. If there is a last child (check if it's not null), then:
 *    a. Add the class "removing" to it for animation
 *    b. Use setTimeout to wait 300ms, then remove the element
 *
 * SYNTAX REMINDER:
 * - To check if something exists: if (variable) { ... }
 * - To add a class: element.classList.add('className')
 * - To remove an element: element.remove()
 * - setTimeout syntax: setTimeout(() => { code here }, milliseconds)
 *
 * HINT: This is the same as Exercise 1's removeFromStack!
 */
function removeFromCallStack() {
    const lastChild = callStack.lastElementChild;
    if (lastChild) {
        lastChild.classList.add("removing");
        setTimeout(() => {
            lastChild.remove();
        }, 2000);
    }
}

/**
 * TASK 3: Implement addToWebAPIs()
 *
 * WHAT THIS DOES: Shows a timer running in the Web APIs area
 *
 * NEW CONCEPT: We need to return the created element so we can update it later!
 *
 * STEPS TO COMPLETE:
 * 1. Create a new div element
 * 2. Add the class "api-item" to it
 * 3. Set its innerHTML to include:
 *    - An h4 with the operation name (e.g., "setTimeout")
 *    - A div with class "timer" showing "Time remaining: Xms"
 * 4. Append it to the webAPIs element
 * 5. IMPORTANT: Return the element you created (so we can update the timer)
 *
 * EXAMPLE STRUCTURE:
 * <div class="api-item">
 *   <h4>setTimeout</h4>
 *   <div class="timer">Time remaining: 2000ms</div>
 * </div>
 *
 * WHY RETURN THE ELEMENT?
 * We need to update the timer countdown, so we return the element
 * so other functions can modify it later.
 *
 * SYNTAX REMINDER:
 * To return a value: return variableName;
 */
function addToWebAPIs(operationName, delay) {
    const webApiDiv = document.createElement("div");
    webApiDiv.classList.add("api-item");
    webApiDiv.innerHTML = `
<h4>${operationName}</h4>
<div class="timer">Time remaining: ${delay}ms</div>
`;
    webAPIs.appendChild(webApiDiv);
    return webApiDiv;
}

/**
 * TASK 4: Implement updateWebAPITimer()
 *
 * WHAT THIS DOES: Updates the countdown timer in a Web API element
 *
 * NEW CONCEPT: querySelector lets you find elements inside a specific parent element
 *
 * STEPS TO COMPLETE:
 * 1. Find the timer div inside the apiElement using:
 *    apiElement.querySelector('.timer')
 * 2. If the timer exists, update its textContent to show the new time:
 *    "Time remaining: Xms" (where X is the timeRemaining parameter)
 *
 * EXAMPLE:
 * If timeRemaining is 1500, the timer should show: "Time remaining: 1500ms"
 *
 * SYNTAX REMINDER:
 * - querySelector finds ONE element: element.querySelector('.className')
 * - textContent sets the text: element.textContent = 'new text'
 * - Template literals for strings: `Time remaining: ${variable}ms`
 */
function updateWebAPITimer(apiElement, timeRemaining) {
    const timer = apiElement.querySelector(".timer");

    if (timer) timer.textContent = `Time remaining: ${timeRemaining}ms`;
}

/**
 * TASK 5: Implement removeFromWebAPIs()
 *
 * WHAT THIS DOES: Removes a completed timer from Web APIs
 *
 * STEPS TO COMPLETE:
 * 1. Add the class "completing" to the apiElement for animation
 * 2. Use setTimeout to wait 300ms
 * 3. Inside the setTimeout callback, remove the element using .remove()
 *
 * HINT: Similar pattern to removeFromCallStack but you're passed the specific element
 */
function removeFromWebAPIs(apiElement) {
    // YOUR CODE HERE
}

/**
 * TASK 6: Implement addToTaskQueue()
 *
 * WHAT THIS DOES: Adds a callback function to the task queue
 *
 * STEPS TO COMPLETE:
 * 1. Create a new div element
 * 2. Add the class "queue-item" to it
 * 3. Set its innerHTML to include:
 *    - An h4 with the callback name
 *    - A p tag with text "Waiting for call stack to clear..."
 * 4. Append it to the taskQueue element
 *
 * EXAMPLE STRUCTURE:
 * <div class="queue-item">
 *   <h4>callback: timeoutCallback</h4>
 *   <p>Waiting for call stack to clear...</p>
 * </div>
 */
function addToTaskQueue(callbackName) {
    // YOUR CODE HERE
}

/**
 * TASK 7: Implement removeFromTaskQueue()
 *
 * WHAT THIS DOES: Removes the first callback from the task queue
 *
 * NEW CONCEPT: Unlike the call stack (LIFO), the task queue is FIFO (First In, First Out)
 * So we remove from the BEGINNING, not the end!
 *
 * STEPS TO COMPLETE:
 * 1. Get the FIRST child of taskQueue using: taskQueue.firstElementChild
 * 2. If it exists:
 *    a. Add the class "moving" to it
 *    b. Use setTimeout to wait 300ms
 *    c. Remove the element
 *
 * KEY DIFFERENCE FROM CALL STACK:
 * - Call Stack: lastElementChild (remove from end - LIFO)
 * - Task Queue: firstElementChild (remove from beginning - FIFO)
 */
function removeFromTaskQueue() {
    // YOUR CODE HERE
}

/**
 * TASK 8: Implement setEventLoopStatus()
 *
 * WHAT THIS DOES: Updates the Event Loop status indicator
 *
 * STEPS TO COMPLETE:
 * 1. Find the .loop-status element inside eventLoop using querySelector
 * 2. Set its textContent to the status parameter
 * 3. Remove the "checking" class from it (in case it was there before)
 * 4. If the status is "Checking", add the "checking" class back
 *
 * WHY: The "checking" class makes the event loop pulse faster
 *
 * SYNTAX REMINDER:
 * - Remove a class: element.classList.remove('className')
 * - Add a class: element.classList.add('className')
 * - Check if strings match: if (variable === 'value') { ... }
 */
function setEventLoopStatus(status) {
    // YOUR CODE HERE
}

/**
 * TASK 9: Implement logExecution()
 *
 * WHAT THIS DOES: Logs execution steps
 *
 * STEPS TO COMPLETE:
 * 1. Increment executionStep by 1
 * 2. Create a div with class "log-entry"
 * 3. Set its innerHTML to include:
 *    - A div with class "timestamp" showing "Step X" (where X is executionStep)
 *    - A div with class "message" showing the message parameter
 * 4. Append to executionLog
 * 5. Auto-scroll to bottom using: executionLog.scrollTop = executionLog.scrollHeight
 *
 * HINT: This is the same as Exercise 1!
 */
function logExecution(message) {
    // YOUR CODE HERE
}

/**
 * TASK 10: Implement simulateTimeout()
 *
 * WHAT THIS DOES: Simulates setTimeout behavior through the event loop
 *
 * THIS IS THE MOST COMPLEX TASK - READ CAREFULLY!
 *
 * NEW CONCEPTS:
 * - Promises: A way to handle asynchronous operations
 * - setInterval: Runs code repeatedly at set intervals
 * - clearInterval: Stops a setInterval
 *
 * STEPS TO COMPLETE:
 * 1. Log that setTimeout was called
 * 2. Add a Web API item and store the returned element in a variable
 * 3. Create a variable to track remaining time (start with the delay parameter)
 * 4. Create a setInterval that runs every 100ms to update the countdown:
 *    SYNTAX: const intervalId = setInterval(() => { code here }, 100);
 *
 *    Inside the interval callback:
 *    a. Decrease remaining time by 100
 *    b. Update the Web API timer display
 *    c. If remaining time <= 0:
 *       - Clear the interval using: clearInterval(intervalId)
 *       - Remove from Web APIs
 *       - Add callback to task queue
 *       - Log that timer completed
 *
 * 5. Return a Promise that resolves when the timeout completes
 *    SYNTAX:
 *    return new Promise((resolve) => {
 *        // When timer completes, call: resolve();
 *    });
 *
 * WHY PROMISES?
 * Promises let us wait for asynchronous operations to complete.
 * When we call resolve(), it signals that the operation is done.
 *
 * FULL STRUCTURE HINT:
 * function simulateTimeout(callbackName, delay) {
 *     logExecution(...);
 *     const apiElement = addToWebAPIs(...);
 *     let remainingTime = delay;
 *
 *     return new Promise((resolve) => {
 *         const intervalId = setInterval(() => {
 *             remainingTime -= 100;
 *             updateWebAPITimer(...);
 *
 *             if (remainingTime <= 0) {
 *                 clearInterval(intervalId);
 *                 removeFromWebAPIs(...);
 *                 addToTaskQueue(...);
 *                 logExecution(...);
 *                 resolve();
 *             }
 *         }, 100);
 *     });
 * }
 */
function simulateTimeout(callbackName, delay) {
    // YOUR CODE HERE
}

/**
 * TASK 11: Implement processTaskQueue()
 *
 * WHAT THIS DOES: The Event Loop checks if it can move callbacks from queue to stack
 *
 * NEW CONCEPT: This simulates the Event Loop's main job!
 *
 * THE EVENT LOOP RULE:
 * - Only move callbacks from Task Queue to Call Stack when Call Stack is empty
 *
 * STEPS TO COMPLETE:
 * 1. Check if call stack is empty using: callStack.children.length === 0
 * 2. Check if task queue has items using: taskQueue.children.length > 0
 * 3. If BOTH conditions are true:
 *    a. Set event loop status to "Checking"
 *    b. Log that event loop is moving a callback
 *    c. Wait 500ms using: await new Promise(resolve => setTimeout(resolve, 500))
 *    d. Remove from task queue
 *    e. Add the callback to call stack
 *    f. Log that callback is executing
 *    g. Wait another 800ms (simulate callback execution)
 *    h. Remove from call stack
 *    i. Log that callback completed
 * 4. If conditions aren't met, set event loop status to "Idle"
 *
 * WHY 'async'?
 * This function uses 'await', so it must be marked as 'async'
 * SYNTAX: async function functionName() { ... }
 *
 * CHECKING CHILDREN LENGTH:
 * - element.children gives you all child elements
 * - element.children.length tells you how many there are
 * - If length is 0, the element is empty
 */
async function processTaskQueue() {
    // YOUR CODE HERE
}

/**
 * TASK 12: Implement the main execution function
 *
 * WHAT THIS DOES: Demonstrates how synchronous and asynchronous code work together
 *
 * STEPS TO COMPLETE:
 * 1. Add "main" to call stack
 * 2. Log "Program started"
 * 3. Add "console.log('Start')" to call stack
 * 4. Log the actual output: "OUTPUT: Start"
 * 5. Wait 500ms, then remove from call stack
 *
 * 6. Start a timeout:
 *    - Call simulateTimeout('timeoutCallback', 2000)
 *    - This returns a Promise, but DON'T await it yet!
 *    - Store it in a variable: const timeout1 = simulateTimeout(...)
 *
 * 7. Add "console.log('After setTimeout')" to call stack
 * 8. Log output: "OUTPUT: After setTimeout"
 * 9. Wait 500ms, remove from call stack
 *
 * 10. Start another timeout:
 *     - Call simulateTimeout('anotherCallback', 1000)
 *     - Store in another variable: const timeout2 = simulateTimeout(...)
 *
 * 11. Remove "main" from call stack
 * 12. Log "Main function completed"
 *
 * 13. Now wait for timeouts to complete:
 *     - await timeout1;
 *     - Process the task queue
 *     - await timeout2;
 *     - Process the task queue again
 *
 * 14. Log "All operations completed"
 *
 * KEY CONCEPT:
 * When you call simulateTimeout WITHOUT await, it starts the timer but
 * doesn't wait for it. This is how setTimeout works in real JavaScript!
 * The main function continues and completes, then later the callbacks run.
 *
 * SYNTAX REMINDERS:
 * - Wait for time: await new Promise(resolve => setTimeout(resolve, ms))
 * - Store Promise: const variable = asyncFunction()
 * - Wait for Promise: await variable
 */
async function main() {
    // YOUR CODE HERE
}

/**
 * TASK 13: Implement reset()
 *
 * WHAT THIS DOES: Clears all visualizations
 *
 * STEPS TO COMPLETE:
 * 1. Clear callStack.innerHTML
 * 2. Clear webAPIs.innerHTML
 * 3. Clear taskQueue.innerHTML
 * 4. Clear executionLog.innerHTML
 * 5. Reset event loop status to "Idle"
 * 6. Reset executionStep to 0
 *
 * HINT: Similar to Exercise 1, but now you have more elements to clear!
 */
function reset() {
    // YOUR CODE HERE
}

// Event listeners
startBtn.addEventListener("click", () => {
    reset();
    main();
});

resetBtn.addEventListener("click", reset);

/**
 * CONGRATULATIONS!
 *
 * Once you complete all tasks, you'll have a working Event Loop visualizer that shows:
 * - How synchronous code executes on the call stack
 * - How setTimeout moves to Web APIs
 * - How callbacks wait in the Task Queue
 * - How the Event Loop moves callbacks to the Call Stack when it's empty
 *
 * This is the foundation of how JavaScript handles asynchronous operations!
 *
 * BONUS CHALLENGES (Optional):
 * 1. Add support for multiple setTimeout calls with different delays
 * 2. Add a speed control slider
 * 3. Add support for Promise visualization
 * 4. Add step-by-step execution mode
 * 5. Color-code different types of operations
 */
