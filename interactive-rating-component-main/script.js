const fields = [
  { id: "n1", value: 1 },
  { id: "n2", value: 2 },
  { id: "n3", value: 3 },
  { id: "n4", value: 4 },
  { id: "n5", value: 5 },
];
var button = document.getElementById("submitButton");
let currentValue = null;
fields.forEach((field) => {
  const element = document.getElementById(field.id);
  element.addEventListener("click", () => {
    // Remove active class from all fields
    fields.forEach((f) => {
      const el = document.getElementById(f.id);
      el.classList.remove("bg-[#FE7714]");
      el.classList.add("bg-gray-700");
    });
    // Add active class to the clicked field
    element.classList.add("bg-[#FE7714]");
    element.classList.remove("bg-gray-700");
    element.style.cursor = "pointer";
    currentValue = field.value;
  });
});
button.addEventListener("click", () => {
  if (currentValue !== null) {
    const container = document.getElementById("container");
    container.innerHTML = `
        <div class="flex flex-col items-center bg-[#212932] w-96 p-10 rounded-3xl gap-6">
            <div class="flex flex-col items-center gap-6">
                <img src="images/illustration-thank-you.svg" alt="" />
                <span class="bg-gray-700 rounded-3xl px-4 py-2 text-[#FE7714]">You selected ${currentValue} out of 5</span>
                <h1 class="text-3xl font-bold">Thank you!</h1>
                <p class="text-center text-gray-400">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
        `;
  }
});
