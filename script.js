let fullname_input = document.getElementById("fullname_input");
let credit_amount_input = document.getElementById("credit_amount_input");
let duration_input = document.getElementById("duration_input");
let salary_input = document.getElementById("salary_input");
let submit_btn = document.getElementById("submit_btn");

const fullname_p = document.getElementById("fullname_p");
const credit_amount_p = document.getElementById("credit_amount_p");
const credit_duration_p = document.getElementById("credit_duration_p");
const salary_p = document.getElementById("salary_p");
const total_amount_p = document.getElementById("total_amount_p");
const monthly_paid_p = document.getElementById("monthly_paid_p");
const salary_rate_p = document.getElementById("salary_rate_p");
const credit_status_p = document.getElementById("credit_status_p");
const confirm_btn = document.getElementById("confirm_btn");

const coefficient_6_month = 1.1;
const coefficient_12_month = 1.5;
const coefficient_24_month = 1.28;
const coefficient_36_month = 1.35;
const coefficient_48_month = 1.55;
const coefficient_salary = 0.6;

let fullname,
  credit_amount,
  credit_duration,
  salary,
  total_credit,
  monthly_pay,
  salary_rate,
  status_creditor;

let submitted = false;

function calculateCredit() {
  switch (credit_duration) {
    case 6:
      total_credit = credit_amount * coefficient_6_month;
      break;
    case 12:
      total_credit = credit_amount * coefficient_12_month;
      break;
    case 24:
      total_credit = credit_amount * coefficient_24_month;
      break;
    case 36:
      total_credit = credit_amount * coefficient_36_month;
      break;
    case 48:
      total_credit = credit_amount * coefficient_48_month;
      break;
  }

  monthly_pay = parseFloat((total_credit / credit_duration).toFixed(2));
  salary_rate = parseFloat((salary * coefficient_salary).toFixed(2));

  status_creditor = monthly_pay <= salary_rate ? "Approved" : "Decline";

  total_amount_p.innerText =
    "Total credit amount: " + parseFloat(total_credit.toFixed(2));
  monthly_paid_p.innerText = "Monthly pay: " + monthly_pay;
  salary_rate_p.innerText = "Salary rate: " + salary_rate;
  credit_status_p.innerText = "Credit status: " + status_creditor;

  fullname = fullname_input.value;
  credit_amount = parseFloat(credit_amount_input.value);
  credit_duration = parseInt(duration_input.value);
  salary = parseFloat(salary_input.value);

  fullname_p.innerText = "Fullname: " + fullname;
  credit_amount_p.innerText = "Credit amount: " + credit_amount;
  credit_duration_p.innerText = "Credit duration: " + credit_duration;
  salary_p.innerText = "Salary: " + salary;

  if (status_creditor == "Approved") {
    credit_status_p.style.color = "green";
    confirm_btn.style.visibility = "visible";
  } else {
    credit_status_p.style.color = "red";
    confirm_btn.style.visibility = "hidden";
  }
  submitted = true;
}

function submitCredit() {
  event.preventDefault();
  fullname = fullname_input.value;
  credit_amount = parseFloat(credit_amount_input.value);
  credit_duration = parseInt(duration_input.value);
  salary = parseFloat(salary_input.value);

  fullname_p.innerText = "Fullname: " + fullname;
  credit_amount_p.innerText = "Credit amount: " + credit_amount;
  credit_duration_p.innerText = "Credit duration: " + credit_duration;
  salary_p.innerText = "Salary: " + salary;
  calculateCredit();

  fullname_input.disabled = true;
  salary_input.disabled = true;
}

function changeImmediate() {
  if (submitted) {
    calculateCredit();
  }
}
