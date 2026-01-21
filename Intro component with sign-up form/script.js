const form = document.getElementById("signupForm");
const fields = [
  { id: "first-name", message: "First Name cannot be empty" },
  { id: "last-name", message: "Last Name cannot be empty" },
  { id: "email-address", message: "Looks like this is not an email" },
  { id: "password", message: "Password cannot be empty" },
];
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;
  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const error = input.nextElementSibling;
    const errorImg = error.nextElementSibling;

    if (validation(field.id === "first-name" || "last-name" ? nameRegex : field.id === "email-address" ? emailRegex : passwordRegex, input)) {
      error.classList.add("hidden");
      errorImg.classList.add("hidden");
      input.classList.remove("border-red-500");
      input.classList.remove("focus:ring-red-500");
    }
    if (input.value.trim() === "") {
      error.textContent = field.message;
      error.classList.remove("hidden");
      errorImg.classList.remove("hidden");
      input.classList.add("ring-1");
      input.classList.add("ring-red-500");
      isValid = false;
    }
    if (field.email && input.value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        error.textContent = field.message;
        error.classList.remove("hidden");
        input.classList.add("focus:ring-red-500");
        input.classList.add("border-red-500");
        isValid = false;
      }
    }
  });
  if (isValid) {
    form.reset();
    alert("Form submitted successfully!");
  }
});
function validation(rejex, inputField) {
  if (rejex.test(inputField.value)) {
    return true;
  } else {
    return false;
  }
}
