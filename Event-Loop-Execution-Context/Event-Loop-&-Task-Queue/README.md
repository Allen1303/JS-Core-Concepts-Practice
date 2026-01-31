# JavaScript Event Loop & Execution Context - Exercise

## 📚 Exercise 2: Event Loop & Task Queue Visualizer

### Overview

This exercise builds on Exercise 1 by introducing **asynchronous JavaScript**. You'll visualize how the Event Loop coordinates between the Call Stack, Web APIs, and Task Queue to handle asynchronous operations like `setTimeout`.

### Concepts Covered

#### 1. **The JavaScript Runtime Environment**

JavaScript in browsers has several components:

```
┌─────────────────────────────────────────┐
│ JavaScript Engine                       │
│ ┌─────────────────────────────────┐     │
│ │ Call Stack                      │     │
│ │ (Synchronous Code Execution)    │
│ └─────────────────────────────────┘     │
└─────────────────────────────────────────┘
         ↑                    ↓
         │                    │
┌────────┴────────────────────┴────────────┐
│ Web APIs                                 │
│ (setTimeout, fetch, DOM events, etc.)    │
└────────┬─────────────────────────────────┘
         │
         ↓
┌─────────────────────────────────────────┐
│ Task Queue                              │
│ (Callback Queue)                        │
└────────┬────────────────────────────────┘
         │
         ↓
┌─────────────────────────────────────────┐
│ Event Loop                              │
│ (Monitors Stack & Queue)                │
└─────────────────────────────────────────┘
```

#### 2. **The Call Stack** (Review from Exercise 1)

- **LIFO** (Last In, First Out) structure
- Holds currently executing functions
- Only **one** function executes at a time (single-threaded)
- When a function completes, it's popped off

#### 3. **Web APIs**

Web APIs are provided by the browser (not JavaScript itself):

- `setTimeout()` and `setInterval()`
- `fetch()` for HTTP requests
- DOM event listeners
- `Promise` resolution

**Key Point:** When you call `setTimeout(callback, 1000)`:

1. The timer doesn't run on the Call Stack
2. It's handed off to the Web APIs environment
3. The Call Stack continues with other code
4. When the timer completes, the callback goes to the Task Queue

#### 4. **Task Queue (Callback Queue)**

- **FIFO** (First In, First Out) structure
- Holds callbacks that are ready to execute
- Callbacks wait here until the Call Stack is empty
- Examples: `setTimeout` callbacks, event handlers

**Important Difference:**

- **Call Stack:** LIFO (Last In, First Out) - like a stack of plates
- **Task Queue:** FIFO (First In, First Out) - like a line at a store

#### 5. **The Event Loop**

The Event Loop has **one simple job**:

```js
while (true) {
  if (callStack.isEmpty() && taskQueue.hasCallbacks()) {
    const callback = taskQueue.dequeue();
    callStack.push(callback);
  }
}
```

**The Event Loop constantly checks:**

1. Is the Call Stack empty?
2. Are there callbacks in the Task Queue?
3. If YES to both → Move a callback from Queue to Stack

**Critical Rule:** Callbacks only move to the Call Stack when it's completely empty!

#### 6. **How Asynchronous Code Works**

Let's trace through this code:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("End");
```

**Execution Flow:**

Step 1: console.log('Start') → Call Stack
Output: "Start"
Pop from stack

Step 2: setTimeout() → Call Stack

- setTimeout is called
- Timer (1000ms) goes to Web APIs
- setTimeout pops from stack (doesn't wait!)

Step 3: console.log('End') → Call Stack
Output: "End"
Pop from stack

Step 4: Call Stack is empty, but timer still running in Web APIs

Step 5: After 1000ms, timer completes

- Callback moves to Task Queue

Step 6: Event Loop checks

- Stack empty? YES
- Queue has callback? YES
- Move callback to stack

Step 7: callback executes → Call Stack
Output: "Timeout"
Pop from stack

Final Output Order:
"Start"
"End"
"Timeout" ← Runs AFTER "End" even though delay is 1000ms!

**Key Insight:** `setTimeout(callback, 0)` still goes through the Event Loop!

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

// Output: A, C, B (not A, B, C!)
// Because 'B' must wait for the Call Stack to clear!
```

#### 7. **Why JavaScript is Non-Blocking**

Without the Event Loop:

```javascript
// If setTimeout blocked the stack:
setTimeout(() => console.log("Done"), 5000);
console.log("After timeout"); // Would have to wait 5 seconds!
```

With the Event Loop:

```js
// setTimeout doesn't block:
setTimeout(() => console.log("Done"), 5000);
console.log("After timeout"); // Runs immediately!
// "Done" appears 5 seconds later
```

The browser can:

- Handle user clicks
- Run timers
- Make network requests
- All while JavaScript code continues running!

### Technical Deep Dive

#### Promises & Microtask Queue (Advanced - Not in this exercise)

There's actually another queue called the **Microtask Queue** that has higher priority than the Task Queue:

```
Event Loop Priority:
1. Call Stack
2. Microtask Queue (Promises, queueMicrotask)
3. Task Queue (setTimeout, setInterval, events)
```

This will be covered in Exercise 3!

#### Common Misconceptions

**❌ Misconception:** "setTimeout(callback, 1000) waits exactly 1000ms"

**✅ Reality:** It waits **at least** 1000ms. If the Call Stack is busy, the callback waits longer!

```javascript
// This takes 5+ seconds, not 5 seconds!
function heavyWork() {
  const start = Date.now();
  while (Date.now() - start < 5000) {} // Block for 5 seconds
}

setTimeout(() => console.log("Timeout"), 1000);
heavyWork(); // Blocks the stack for 5 seconds
// "Timeout" appears after 5+ seconds, not 1 second!
```

### Learning Outcomes

This exercise, allows us to:

✅ Explain how the Event Loop works  
✅ Understand why asynchronous code doesn't block  
✅ Predict the output order of mixed sync/async code  
✅ Explain the difference between Call Stack and Task Queue (LIFO vs FIFO)  
✅ Understand when callbacks execute  
✅ Debug timing-related issues in JavaScript

### New Concepts Introduced

#### Promises

```javascript
// A Promise represents a future value
const promise = new Promise((resolve, reject) => {
  // Do async work
  setTimeout(() => {
    resolve("Done!"); // Signal completion
  }, 1000);
});

// Use the Promise
promise.then((result) => {
  console.log(result); // "Done!" after 1 second
});
```

#### setInterval vs setTimeout

```javascript
// setTimeout: Run ONCE after delay
setTimeout(() => console.log("Once"), 1000);

// setInterval: Run REPEATEDLY at interval
const id = setInterval(() => console.log("Repeat"), 1000);

// Stop the interval
clearInterval(id);
```

#### querySelector

```javascript
// Find ONE element with a class
const element = document.querySelector(".className");

// Find ALL elements with a class
const elements = document.querySelectorAll(".className");

// Find within a specific parent
const child = parentElement.querySelector(".child-class");
```

### Execution Flow

```
1. main() → Call Stack
2. console.log('Start') → Call Stack → Output
3. setTimeout() → Web APIs (timer starts)
4. console.log('After setTimeout') → Call Stack → Output
5. main() completes → Call Stack empty
6. Timer completes → Callback to Task Queue
7. Event Loop checks → Stack empty, Queue has callback
8. Callback → Call Stack → Executes
```

---

## Project Structure

```
exercise-2/
│
├── index.html          # HTML structure with 4 visualization areas
├── style.css           # Styling and animations
├── app.js              # Your implementation code (13 tasks)
└── README.md           # This file
```

## Resources

- [MDN: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [JavaScript.info: Event Loop](https://javascript.info/event-loop)
- [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (Excellent video!)
- [Jake Archibald: In The Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (Advanced)
