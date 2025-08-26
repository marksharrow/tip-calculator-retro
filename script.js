const clickSound = new Audio("./assets/click.mp3");

const form = document.getElementById("tip-form");
const result = document.getElementById("result");

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
  Tip: $${tipAmount.toFixed(2)} <br>
  Total: $${total.toFixed(2)} <br>
  Each person pays: $${perPerson.toFixed(2)} <span class="cursor">|</span>
`;
});
