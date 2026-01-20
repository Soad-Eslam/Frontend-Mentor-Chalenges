const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqContent = button.nextElementSibling;
    const icon = button.querySelector("img");

    // Toggle max-height and opacity for smooth slide
    faqContent.classList.toggle("max-h-96");
    faqContent.classList.toggle("opacity-100");

    if (faqContent.classList.contains("max-h-96")) {
      icon.src = "./assets/images/icon-minus.svg";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
    }
  });
});
