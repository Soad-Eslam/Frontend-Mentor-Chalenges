const buttons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let count = Number(button.dataset.count);

    if (count === 0) {
      count = 1;
      button.dataset.count = count;

      addToCart(
        button.dataset.name,
        button.dataset.price,
        count,
        button.dataset.src,
      );

      button.innerHTML = `
        <img src="assets/images/icon-decrement-quantity.svg" class="decrement cursor-pointer">
        <span class="count">${count}</span>
        <img src="assets/images/icon-increment-quantity.svg" class="increment cursor-pointer">
      `;

      button.className =
        "add-to-cart absolute top-[170px] left-[50px] bg-rose-500 px-4 py-2 rounded-2xl text-white flex gap-[10px] border border-rose-500";

      const inc = button.querySelector(".increment");
      const dec = button.querySelector(".decrement");

      inc.addEventListener("click", (e) => {
        e.stopPropagation();
        count++;
        button.dataset.count = count;
        button.querySelector(".count").textContent = count;

        addToCart(
          button.dataset.name,
          button.dataset.price,
          count,
          button.dataset.src,
        );
      });

      dec.addEventListener("click", (e) => {
        e.stopPropagation();

        if (count > 1) {
          count--;
          button.dataset.count = count;
          button.querySelector(".count").textContent = count;

          addToCart(
            button.dataset.name,
            button.dataset.price,
            count,
            button.dataset.src,
          );
        } else {
          count = 0;
          button.dataset.count = count;

          addToCart(
            button.dataset.name,
            button.dataset.price,
            count,
            button.dataset.src,
          );

          button.innerHTML = `
            <img src="assets/images/icon-add-to-cart.svg" />
            <span class="text-black">Add to Cart</span>
          `;

          button.className =
            "add-to-cart absolute top-[170px] left-[20px] bg-white px-4 py-2 rounded-2xl text-rose-500 flex gap-[10px] border border-rose-500";
        }
      });
    }
  });
});

function addToCart(name, price, count, src) {
  document.getElementById("empty-cart").style.display = "none";
  document.getElementById("cart").style.height = "auto";

  let listItem = cartItems.querySelector(`li[data-name="${name}"]`);

  if (!listItem && count > 0) {
    listItem = document.createElement("li");
    listItem.dataset.name = name;
    listItem.dataset.price = price;
    listItem.dataset.src = src;
    cartItems.appendChild(listItem);
  }

  if (listItem && count > 0) {
    listItem.dataset.count = count;
    listItem.textContent = `${name} - $${price} x ${count}`;
  }

  if (listItem && count === 0) {
    listItem.remove();
  }

  updateCartCount();
}

function updateCartCount() {
  let total = 0;
  let cost = 0;

  cartItems.querySelectorAll("li").forEach((item) => {
    total += Number(item.dataset.count);
    cost += Number(item.dataset.price) * Number(item.dataset.count);
  });

  cartCount.textContent = total;
  cartTotal.textContent = cost.toFixed(2);

  if (total === 0) {
    document.getElementById("empty-cart").style.display = "block";
  }
}

/* ================= MODAL ================= */

const checkoutBtn = document.getElementById("checkout-btn");
const modal = document.getElementById("checkout-modal");
const closeModal = document.getElementById("close-modal");
const modalCartItems = document.getElementById("modal-cart-items");
const modalCartTotal = document.getElementById("modal-cart-total");

checkoutBtn.addEventListener("click", () => {
  modalCartItems.innerHTML = "";

  cartItems.querySelectorAll("li").forEach((item) => {
    const modalItem = document.createElement("li");
    modalItem.className = "flex items-center gap-3";

    const img = document.createElement("img");
    img.src = item.dataset.src;
    img.className = "w-10 h-10 rounded object-cover";

    const text = document.createElement("span");
    text.textContent = item.textContent;

    modalItem.appendChild(img);
    modalItem.appendChild(text);
    modalCartItems.appendChild(modalItem);
  });

  modalCartTotal.textContent = cartTotal.textContent;
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
