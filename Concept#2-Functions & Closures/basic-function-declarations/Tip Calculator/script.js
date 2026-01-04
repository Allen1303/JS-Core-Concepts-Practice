"use strict";
/* Include functions intro above this */

/*
========================================
💰 PROJECT 3 TASKS — Tip Calculator
Goal: Practice multi-parameter functions + returning calculated results
========================================

TASK 1:
Create a function calculateTip(bill, tipPercent)
- Should return the tip amount (not total)

HINT:
return bill * (tipPercent / 100)

----------------------------------------

TASK 2:
Create a second function calculateTotal(bill, tipAmount)
- Return bill + tipAmount

----------------------------------------

TASK 3:
In the button event:
- Get bill value
- Get percent value
- Call both functions
- Display results

----------------------------------------

TASK 4:
Create a helper function formatMoney(amount)
- Return "$" + amount.toFixed(2)

========================================
*/

const billValue = document.getElementById("bill");
const tipPercent = document.getElementById("tipPercent");
const calculateBtn = document.getElementById("btn");
const result = document.getElementById("result");

function calculateTip(bill, tipPercent) {
    return bill * (tipPercent / 100);
}
// Helper function for calculting the total
function calculateTotal(bill, tipAmount) {
    return bill + tipAmount;
}
function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}
calculateBtn.addEventListener("click", () => {
    const bill = Number(billValue.value);
    const percent = Number(tipPercent.value);

    let tipCalculation = calculateTip(bill, percent);

    let totalBill = calculateTotal(bill, tipCalculation);
    let formatBill = formatMoney(totalBill);

    result.textContent = formatBill;
});
