const clickSound = new Audio("./assets/click.mp3");

const form = document.getElementById("tip-form");
const result = document.getElementById("result");

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clickSound.play();

  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    result.textContent = "Please enter valid numbers!";
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const perPerson = total / people;

  result.innerHTML = `
    Tip: ${formatCurrency(tipAmount)} <br>
    Total: ${formatCurrency(total)} <br>
    Each person pays: ${formatCurrency(perPerson)} <span class="cursor">|</span>
  `;
});
