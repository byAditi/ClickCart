let total = 0;

function addToCart(productName, price) {
  const cartItems = document.getElementById("cart-items");
  const item = document.createElement("li");

  const itemText = document.createElement("span");
  itemText.textContent = `${productName} - $${price}`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.onclick = function () {
    cartItems.removeChild(item);
    total -= price;
    updateTotal();
  };

  item.appendChild(itemText);
  item.appendChild(removeBtn);
  cartItems.appendChild(item);

  total += price;
  updateTotal();
}

function updateTotal() {
  document.getElementById("total").textContent = total;
}

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");

// Set initial icon based on current theme
toggleBtn.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";

// Add click event to toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
});
