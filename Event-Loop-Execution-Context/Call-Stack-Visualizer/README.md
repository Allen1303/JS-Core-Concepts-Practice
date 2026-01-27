# JavaScript Event Loop & Execution Context - Exercise

---

## 📚 Call Stack Visualizer

### Overview

This exercise builds a visual representation of JavaScript's call stack, helping you understand how execution contexts are created, managed, and destroyed during synchronous code execution.

### Concepts Covered

#### 1. **Execution Context**

An execution context is an abstract concept that holds information about the environment within which the current code is being executed.

**Types of Execution Contexts:**

- **Global Execution Context (GEC):** Created when the JavaScript file first loads. There's only one GEC per program.
- **Function Execution Context (FEC):** Created whenever a function is invoked. Each function call creates a new context.
- **Eval Execution Context:** Created when code is executed inside an `eval()` function (rarely used).

**Components of an Execution Context:**

- **Variable Environment:** Stores variables, function declarations, and arguments
- **Lexical Environment:** Similar to variable environment but also contains reference to outer environment
- **This Binding:** Determines the value of `this` keyword

#### 2. **Call Stack**

The call stack is a LIFO (Last In, First Out) data structure that stores execution contexts. It tracks where we are in program execution.

**How it works:**

1. When a script starts, the Global Execution Context is pushed onto the stack
2. When a function is called, a new Function Execution Context is created and pushed
3. When a function completes, its context is popped off the stack
4. The process continues until the stack is empty

**Example:**

```javascript
function multiply(a, b) {
  return a * b;
}

function calculate() {
  const result = multiply(3, 4);
  return result + 2;
}

calculate();
```

**Call Stack Progression:**

```
Step 1: [Global Context]
Step 2: [Global Context, calculate()]
Step 3: [Global Context, calculate(), multiply()]
Step 4: [Global Context, calculate()]  // multiply() finished
Step 5: [Global Context]  // calculate() finished
Step 6: []  // Global finished
```

#### 3. **Synchronous Execution**

JavaScript is single-threaded, meaning it executes one piece of code at a time. Synchronous code runs sequentially, blocking subsequent code until the current operation completes.

**Key Points:**

- Each function must complete before the next one starts
- The call stack processes functions in order
- Blocking operations can freeze the entire application

#### 4. **Stack Overflow**

When too many execution contexts are pushed onto the stack (usually from infinite recursion), it causes a stack overflow error.

```javascript
function recursiveFunction() {
  recursiveFunction(); // Never stops calling itself
}
// RangeError: Maximum call stack size exceeded
```

### Learning Outcomes

This exercise, allows us to:
✅ Visualize how the call stack grows and shrinks  
✅ Understand the order of execution in synchronous code  
✅ Identify when execution contexts are created and destroyed  
✅ Recognize the relationship between function calls and stack frames  
✅ Debug stack-related errors more effectively

### Technical Implementation

**Key Functions Implemented:**

- `addToStack()` - Pushes a new execution context onto the visual stack
- `removeFromStack()` - Pops an execution context off the stack
- `logExecution()` - Records each step of execution
- `updateContextInfo()` - Displays current context information
- Simulation functions that demonstrate real function calls
