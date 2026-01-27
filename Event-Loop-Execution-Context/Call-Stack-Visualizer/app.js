"use strict";

/**
 * EXERCISE 1: Call Stack Visualizer
 *
 * LEARNING OBJECTIVES:
 * - Understand how the call stack works in JavaScript
 * - Visualize execution contexts being pushed and popped
 * - Learn about the execution order of synchronous code
 */

// Get DOM elements
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const callStack = document.getElementById("callStack");
const executionLog = document.getElementById("executionLog");
const contextInfo = document.getElementById("contextInfo");

// Global state
let executionStep = 0;

function addToStack(functionName) {
    const stackDiv = document.createElement("div"); //Create a new stack item element with
    stackDiv.classList.add("stack-item"); //Class stack-item
    stackDiv.innerHTML = `
<h4>${functionName}</h4>
<p>Execution Context: ${functionName}</p> `; //p tag with context information
    callStack.appendChild(stackDiv); // * 4. Append the element to the callStack div
}

function removeFromStack() {
    const lastChild = callStack.lastElementChild; // Get the last child of the callStack
    lastChild.classList.add("removing"); // Add the 'removing' class for animation
    setTimeout(() => {
        lastChild.remove(); //After 2000ms, remove the element from the DOM
    }, 2000);
}

function logExecution(message) {
    executionStep++;
    const stepDiv = document.createElement("div");
    stepDiv.classList.add("log-entry");
    stepDiv.innerHTML = `
    <div class="timestamp">Step: ${executionStep}</div>
    <div class="message">${message}</div>

`;
    executionLog.appendChild(stepDiv); // Append to the executionLog div
    executionLog.scrollTop = executionLog.scrollHeight; // * 5. Auto-scroll to the bottom
}
function updateContextInfo(info) {
    contextInfo.innerHTML = "";
    const { functionName, variables, action } = info;
    contextInfo.innerHTML = `
<p><strong>Function:</strong> ${functionName}</p>
<p><strong>Variables:</strong> ${JSON.stringify(variables)}</p>
<p><strong>Action:</strong> ${action}</p>
`;
}

async function multiply(a, b) {
    // Should: add to stack, log, update context, calculate, wait, remove from stack
    addToStack("multiply"); // * 1. Add itself to the stack
    logExecution(`Multiplying ${a} * ${b}`); // * 2. Log its execution
    updateContextInfo({
        functionName: "Multiply",
        variables: { a, b },
        action: "calculating product",
    }); // * 3. Update context info
    const result = a * b; // * 4. Perform its operation
    await new Promise((resolve) => setTimeout(resolve, 2000)); // * Use setTimeout with delays

    removeFromStack(); // * 5. Remove itself from the stack when done
    return result;
}

async function add(a, b) {
    // Should: add to stack, log, update context, calculate, wait, remove from stack

    addToStack("add"); // Add itself to the stack
    logExecution(`Adding ${a} + ${b}`); // Log its execution
    updateContextInfo({
        functionName: "Add",
        variables: { a, b },
        action: "calculating sum",
    }); //  Update context info
    const result = a + b; // Perform its operation
    await new Promise((resolve) => setTimeout(resolve, 2000)); // * Use setTimeout with delays

    removeFromStack(); // * 5. Remove itself from the stack when done
    return result;
    // Return the result
}

async function calculate() {
    // Should:
    addToStack("calculate"); // 1. Add to stack
    logExecution("Start calculating"); // 2. Log execution
    updateContextInfo({
        functionName: "calculate",
        variables: {},
        action: "coordinating operations",
    });
    const result = await multiply(3, 4); //  Call multiply(3, 4)
    const finalResult = await add(result, 3); // Call add(result, 3)
    logExecution(`Final result: ${finalResult}`); // Log final result

    await new Promise((resolve) => setTimeout(resolve, 2000));

    removeFromStack(); // Remove from stack
}

async function main() {
    // Should:
    addToStack("Global Execution Context"); // 1. Add "Global Execution Context" to stack
    logExecution("Program start"); // Log start

    updateContextInfo({
        functionName: "calculate",
        variables: {},
        action: "initializing",
    });
    await calculate(); // Call calculate()
    logExecution("Program complete"); //  Log completion

    await new Promise((resolve) => setTimeout(resolve, 2000));
    removeFromStack(); // Remove global context from stack
}

function reset() {
    callStack.innerHTML = ""; //   Clear the call stack display
    executionLog.innerHTML = ""; //   Clear the execution log
    contextInfo.innerHTML = ` <p>Press "Start Execution" to begin</p> `; //   Reset the context info to initial state
    executionStep = 0; //   Reset executionStep to 0
}

// Event listeners
startBtn.addEventListener("click", () => {
    reset();
    main();
});

resetBtn.addEventListener("click", reset);

/**
 * BONUS CHALLENGES (Optional):
 *
 * 1. Add a delay slider to control the speed of execution
 * 2. Highlight the current active function in the stack
 * 3. Add color coding for different types of operations
 * 4. Show memory/variables section for each context
 * 5. Add step-by-step execution (next/previous buttons)
 * These will deepen your understanding of execution contexts!
 **/
