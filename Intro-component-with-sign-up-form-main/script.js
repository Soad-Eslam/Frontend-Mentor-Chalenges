const form = document.getElementById("signupForm");

const fields = [
  { id: "first-name", message: "First Name cannot be empty" },
  { id: "last-name", message: "Last Name cannot be empty" },
  { id: "email-address", message: "Looks like this is not an email" },
  { id: "password", message: "Password cannot be empty" },
];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;
  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const error = input.nextElementSibling;

    error.classList.add("hidden");
    input.classList.remove("border-red-500");

    if (input.value.trim() === "") {
      error.textContent = field.message;
      error.classList.remove("hidden");
      input.classList.add("border-red-500");
      isValid = false;
    }
    if (field.email && input.value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        error.textContent = field.message;
        error.classList.remove("hidden");
        input.classList.add("border-red-500");
        isValid = false;
      }
    }
  });
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
