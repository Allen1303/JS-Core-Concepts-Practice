"use strict";
/* 
========================================
🍕 PROJECT 1 TASKS — Pizza Price Calculator
Goal: Practice basic function declarations + calling functions
========================================

TASK 1:
Create a function called calculateTotal that:
- Accepts 2 parameters: basePrice, toppingCount
- Returns the final price using this formula:
  totalPrice = base price + (toppingCount * 1.5)

HINT:
function calculateTotal(...) {
  //
}

----------------------------------------

TASK 2:
In the button click event:
- Read the values from the inputs
- Call calculateTotal()
- Display result inside #result

HINT:
let total = calculateTotal(...)

----------------------------------------

TASK 3:
Add a second function formatPrice(amount)
- Should return string like "$12.00"

HINT:
Use template literals: `$${amount.toFixed(2)}`
========================================
*/
// DOM Elements--------------------------------------
const priceInput = document.getElementById("basePrice");
const toppingsInput = document.getElementById("toppings");
const calculateBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");
// Task #1 solution
const calculateTotal = (basePrice, toppingCount) => {
    return Number(basePrice) + Number(toppingCount) * 1.5;
};
//Price formatter helper function
const formatPrice = (amount) => {
    return `$${Number(amount).toFixed(2)}`;
};

calculateBtn.addEventListener("click", function () {
    let basePrice = priceInput.value;
    let toppingCount = toppingsInput.value;
    let total = calculateTotal(basePrice, toppingCount);
    let totalPrice = formatPrice(total);
    result.textContent = totalPrice;
});
