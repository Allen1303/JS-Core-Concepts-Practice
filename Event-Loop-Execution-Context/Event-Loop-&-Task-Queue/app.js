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
function removeFromCallStack() {
    const lastChild = callStack.lastElementChild;
    if (lastChild) {
        lastChild.classList.add("removing");
        setTimeout(() => {
            lastChild.remove();
        }, 3000);
    }
}

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

function updateWebAPITimer(apiElement, timeRemaining) {
    const timer = apiElement.querySelector(".timer");

    if (timer) timer.textContent = `Time remaining: ${timeRemaining}ms`;
}

function removeFromWebAPIs(apiElement) {
    if (apiElement) {
        apiElement.classList.add("completing");
        setTimeout(() => {
            apiElement.remove();
        }, 3000);
    }
}

// Implement addToTaskQueue()
function addToTaskQueue(callbackName) {
    const taskQueueDiv = document.createElement("div");
    taskQueueDiv.classList.add("queue-item");
    taskQueueDiv.innerHTML = `
<h4>Callback: ${callbackName}</h4>
<p>Waiting for call stack to clear...</p>
`;
    taskQueue.appendChild(taskQueueDiv);
}

//Implement removeFromTaskQueue()
function removeFromTaskQueue() {
    const queFirstChild = taskQueue.firstElementChild;
    if (queFirstChild) {
        queFirstChild.classList.add("moving");
        setTimeout(() => {
            queFirstChild.remove();
        }, 3000);
    }
}

// Implement setEventLoopStatus()
function setEventLoopStatus(status) {
    const loopStatus = eventLoop.querySelector(".loop-status");
    loopStatus.textContent = status;
    loopStatus.classList.remove("checking");
    if (status === "Checking") {
        loopStatus.classList.add("checking");
    }
    loopStatus;
}

// Implement logExecution()
function logExecution(message) {
    if (!executionLog) return; //Defensive DOM check
    executionStep++;
    const logEntryDiv = document.createElement("div");
    logEntryDiv.classList.add("log-entry");
    logEntryDiv.innerHTML = `
<div class="timestamp">Step: ${executionStep}</div>
<div class="message">${message}</div>
`;
    executionLog.appendChild(logEntryDiv);
    executionLog.scrollTop = executionLog.scrollHeight;
}
/// Implement simulateTimeout()
function simulateTimeout(callbackName, delay) {
    logExecution(`setTimeout with ${callbackName}, ${delay}ms`);
    const apiElement = addToWebAPIs("setTimeout", delay);
    let remainingTime = delay;
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            remainingTime -= 100;
            updateWebAPITimer(apiElement, remainingTime);
            if (remainingTime <= 0) {
                clearInterval(intervalId);
                removeFromWebAPIs(apiElement);
                addToTaskQueue(callbackName);
                logExecution(`Timer completed: ${callbackName}`);
                resolve();
            }
        }, 100);
    });
}

// Implement processTaskQueue()
async function processTaskQueue() {
    if (callStack.children.length === 0 && taskQueue.children.length > 0) {
        setEventLoopStatus("Checking");
        logExecution(
            "Event loop: Moving a callback from task Queue  to callstack",
        );
        await new Promise((resolve) => setTimeout(resolve, 1500));
        removeFromTaskQueue();
        const callbackName = "callback";
        addToCallStack(callbackName);

        logExecution(`Executing: ${callbackName}`);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        removeFromCallStack();
        logExecution("callback completed");
    } else {
        setEventLoopStatus("Idle");
    }
}
// Implement the main execution function
async function main() {
    addToCallStack("main");
    logExecution("Program started");
    addToCallStack(` console.log("Start")`);
    logExecution("OUTPUT: Start");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    removeFromCallStack();

    const timeout1 = simulateTimeout("timeoutCallback", 3000);
    addToCallStack(` console.log('After setTimeout')`);
    logExecution("OUTPUT: After setTimeout");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    removeFromCallStack();

    const timeout2 = simulateTimeout("anotherCallback", 1500);
    removeFromCallStack();
    logExecution("Main function completed");

    await timeout1;
    await processTaskQueue();

    await timeout2;
    await processTaskQueue();
    logExecution("All operations completed");
}

// Implement reset()
function reset() {
    // YOUR CODE HERE
    callStack.innerHTML = "";
    webAPIs.innerHTML = "";
    taskQueue.innerHTML = "";
    executionLog.innerHTML = "";
    setEventLoopStatus("Idle");
    executionStep = 0;
}

// Event listeners
startBtn.addEventListener("click", () => {
    reset();
    main();
});

resetBtn.addEventListener("click", reset);
