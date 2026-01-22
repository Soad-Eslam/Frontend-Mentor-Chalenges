const cardNumberInput = document.getElementById("cardNumberInput");
const cardNameInput = document.getElementById("cardNameInput");
const expMonthInput = document.getElementById("cardExpMonthInput");
const expYearInput = document.getElementById("cardExpYearInput");
const cvcInput = document.getElementById("cardCvcInput");

const nameRejex = /^[a-zA-Z\s]{3,}$/;
const cardNumberRejex = /^(\d{4}\s){3}\d{4}$|^\d{16}$/;
const expMonthRejex = /^(0[1-9]|1[0-2])$/;
const expYearRejex = /^20(2[3-9]|[3-9][0-9])$/;
const cvcRejex = /^\d{3}$/;

const form = document.getElementById("formContainer");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validation(nameRejex, cardNameInput);
  const isCardNumberValid = validation(cardNumberRejex, cardNumberInput);
  const isExpMonthValid = validation(expMonthRejex, expMonthInput);
  const isExpYearValid = validation(expYearRejex, expYearInput);
  const isCvcValid = validation(cvcRejex, cvcInput);

  if (
    isNameValid &&
    isCardNumberValid &&
    isExpMonthValid &&
    isExpYearValid &&
    isCvcValid
  ) {
    form.classList.add("hidden");
    document
      .querySelector(".thankYouContainer")
      .classList.remove("hidden");
  }
});

function validation(rejex, element) {
  if (rejex.test(element.value)) {
    element.classList.add("border-green-500");
    element.classList.remove("border-red-500");

    if (
      element.nextElementSibling &&
      element.nextElementSibling.tagName === "P"
    ) {
      element.nextElementSibling.classList.add("hidden");
    }

    return true;
  } else {
    element.classList.add("border-red-500");
    element.classList.remove("border-green-500");

    if (element.nextElementSibling) {
      element.nextElementSibling.classList.remove("hidden");
    }

    return false;
  }
}

document
  .getElementById("cardNumberInput")
  .addEventListener("input", function () {
    const cardNumber = this.value;
    value = cardNumber.match(/.{1,4}/g)?.join(" ") || "";
    document.getElementById("cardNumber").textContent = value;
  });

document.getElementById("cardNameInput").addEventListener("input", function () {
  document.getElementById("cardName").textContent = this.value;
});
document
  .getElementById("cardExpMonthInput")
  .addEventListener("input", function () {
    document.querySelector(".cardExpMonth").textContent = this.value;
  });
document
  .getElementById("cardExpYearInput")
  .addEventListener("input", function () {
    document.querySelector(".cardExpYear").textContent = this.value;
  });
document.getElementById("cardCvcInput").addEventListener("input", function () {
  document.getElementById("cardCvc").textContent = this.value;
});
