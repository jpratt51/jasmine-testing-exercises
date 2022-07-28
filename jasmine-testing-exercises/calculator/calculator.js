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
// Put some default values in the input.
function setupIntialValues() {
  let amountInput = (document.getElementById("loan-amount"));
  let yearsInput = (document.getElementById("loan-years"));
  let rateInput = (document.getElementById("loan-rate"));
  amountInput.placeholder = "Loan amount must be > 0";
  yearsInput.placeholder = "Years must be > 0";
  rateInput.placeholder = "Rate must be > 0";
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let amt = Number(document.getElementById("loan-amount").value);
  let payments = Number(document.getElementById("loan-years").value * 12);
  let rate = Number(document.getElementById("loan-rate").value / 100 / 12);
  let monthlyPayment = document.querySelector('span');
  paymentAmt = (amt * rate / (1 - (1 + rate)**(-payments)));
  if (amt > 0 && payments > 0 && rate > 0) {
  monthlyPayment.innerText = "$" + Math.round((paymentAmt + Number.EPSILON) * 100) /100;
  }
  else {
    monthlyPayment.innerText = "Invalid Entry";
  }
}

function calculateMonthlyPayment({values}) {
  let amt = values.amount;
  let payments = values.years;
  let rate = values.rate; 
  let paymentAmt = (amt * rate / (1 - (1 + rate)**(-payments)));
  Math.round((paymentAmt + Number.EPSILON) * 100) /100;
}
