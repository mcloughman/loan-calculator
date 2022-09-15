window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.querySelector("#loan-amount")
  const years = document.querySelector("#loan-years")
  const rate = document.querySelector("#loan-rate")
  amount.value = 200000;
  years.value = 30;
  rate.value = 5.5;
  const loanPackage = {
    amount: amount.value,
    years: years.value,
    rate: rate.value
  }
  
  calculateMonthlyPayment(loanPackage)

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentMP = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(currentMP)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const {amount, years, rate} = values;
  console.log(amount, years, rate);
  const i = (rate / 100) / 12;
  console.log(i)
  const n = years * 12;
  console.log(n)
  let monthlyPayment = (amount * i) / (1 - (1 + i) ** -n)
  console.log(monthlyPayment.toFixed(2))
  console.log(typeof monthlyPayment)
  monthlyPayment = monthlyPayment.toFixed(2).toString()
  console.log(typeof monthlyPayment);
  return monthlyPayment;
 

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const mp = document.querySelector("#monthly-payment")
  mp.innerText = `$${monthly}`
}


