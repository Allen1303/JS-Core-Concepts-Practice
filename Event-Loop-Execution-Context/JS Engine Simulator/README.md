# JS Engine Simulator: Event Loop & Execution Context

### Overview

This project is an interactive visualizer designed to demonstrate how the JavaScript Engine handles synchronous and asynchronous operations. By using this simulator, you can observe the interplay between the **Call Stack**, the **Microtask Queue (Promises)**, and the **Macrotask Queue (Timeouts)**.

---

## 🧠 Core Concepts

### 1. Execution Context & The Call Stack

Every time you run JavaScript code, an **Execution Context** is created.

- **Global Execution Context:** Created when the script starts.
- **Function Execution Context:** Created whenever a function is called.

The **Call Stack** follows the **LIFO** (Last-In, First-Out) principle. When a function finishes, its context is "popped" off the stack.

```javascript
// Example of Execution Context stacking
function second() {
  console.log("Inside Second"); // 2. Second is on top
}

function first() {
  second(); // 1. First calls Second
  console.log("Inside First"); // 3. Back in First after Second pops off
}

first();
```

### 2. The Event Loop

The Event Loop is a constant process that monitors the **Call Stack** and the **Callback Queues**. It has one simple rule:

> **"If the Call Stack is empty, take the first task from the queue and push it onto the stack."**

### 3. Task Priority (Micro vs. Macro)

Not all asynchronous tasks are equal:

1. **Synchronous Code:** Executes immediately.
2. **Microtasks (Promises):** High priority. The engine processes the _entire_ microtask queue before moving on.
3. **Macrotasks (setTimeout):** Lower priority. The engine processes _one_ macrotask, then checks the microtask queue again.

**The "Race" Example:**

```javascript
console.log("Sync");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("Sync End");

// Output Order:
// 1. Sync
// 2. Sync End
// 3. Promise  <-- Microtask wins!
// 4. Timeout  <-- Macrotask runs last
```

---

## 🛠 The Exercise: Building the Simulator

### Objective

Map user interactions to the physical movement of "tasks" between different UI containers to visualize the internal state of the JS Engine.

### Implementation Tasks

1.  **DOM Selection:** Target the UI containers representing the Stack, Microtask Queue, and Macrotask Queue.
2.  **The UI Helper:** Create a `renderTask` function that dynamically creates elements and simulates the passage of time.
3.  **Sync Simulation:** Add tasks directly to the `stack`.
4.  **Async Simulation:**
    - Use `Promise.resolve().then()` to move items from the **Microtask Queue** to the **Stack**.
    - Use `setTimeout()` to move items from the **Macrotask Queue** to the **Stack**.

### How to test the Event Loop Priority:

1.  Click the **Timeout** button.
2.  Click the **Promise** button.
3.  Click the **Sync** button.

**Observe:** Even though you clicked "Timeout" first, the "Sync" task will appear on the stack immediately. Once the stack is clear, the "Promise" will jump from the Micro-Queue to the stack, and only _after_ that will the "Timeout" task move.

---

## 🧪 Challenges for Improvement

- [ ] **Sequential Stacking:** Modify the `sync-btn` to call three different functions (`taskA`, `taskB`, `taskC`) and visualize them stacking on top of each other.
- [ ] **Blocking the Stack:** Create a "Heavy Loop" button that runs a `for` loop for 5 seconds. Observe how the UI "freezes" and no other tasks can move until it finishes.
- [ ] **Queue Counters:** Add a small badge to each header showing the number of tasks currently waiting in that specific queue.

---

### 📂 Project Structure

- `index.html` - The "dashboard" containing the Stack and Queues.
- `style.css` - Visual styling for the different task types.
- `main.js` - The engine logic utilizing the Event Loop principles.
