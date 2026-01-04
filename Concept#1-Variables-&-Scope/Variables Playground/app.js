"use strict";

/*
=====================================================
CONCEPT: Scope & Variables (var / let / const)
PROJECT: Simple Variables Playground
=====================================================

STUDY THIS EXAMPLE FIRST:
-------------------------
{
  let a = 'block';
  var b = 'function';
}
// console.log(a); → ReferenceError
// console.log(b); → 'function'

WHY THIS MATTERS:
- let/const follow block scope → safer
- var leaks outside blocks → can cause bugs
- Understanding this is essential before closures
-----------------------------------------------------
*/

/*
=====================================================
YOUR TASKS (NO SOLUTIONS GIVEN)
=====================================================

TODO 1:
Inside the button click handler, create variables using var, let, and const.
Observe in the console or #output which variables are accessible inside/outside blocks.

HINT 1:
Use a simple { } block inside the event listener to test block scope differences.

TODO 2:
Demonstrate what happens when you try to redeclare or reassign each type.

HINT 2:
Try:
  var x;
  let y;
  const z;
See which allow redeclaration or reassignment.

TODO 3:
Print notes into #output describing what you observed.

HINT 3:
Use outputEl.textContent += "your text"; to append lines.
=====================================================
*/

document.addEventListener("DOMContentLoaded", () => {
    const runBtn = document.getElementById("runBtn");
    const output = document.getElementById("output");

    runBtn.addEventListener("click", () => {
        output.textContent = "";

        // 🔽 Your experiments go *below* this line
        {
            var x = "function scope";
            let y = "block scope variable";
            const z = "block scope variable";

            output.textContent += `var = ${x}, let = ${y}, const = ${z}`;
        }
    });
});
