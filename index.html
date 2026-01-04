const menuData = [
  { id: 1, name: "Espresso", price: 120, type: "coffee" },
  { id: 2, name: "Cappuccino", price: 180, type: "coffee" },
  { id: 3, name: "Cold Brew", price: 200, type: "coffee" },
  { id: 4, name: "Brownie", price: 150, type: "dessert" },
  { id: 5, name: "Cheesecake", price: 220, type: "dessert" }
];

let cart = [];
let currentFilter = "all";

const menuEl = document.getElementById("menuItems");
const cartEl = document.getElementById("cartItems");
const totalEl = document.getElementById("totalPrice");

/* Render menu */
function renderMenu() {
  menuEl.innerHTML = "";

  const filtered = currentFilter === "all"
    ? menuData
    : menuData.filter(item => item.type === currentFilter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button>Add to Cart</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      cart.push(item);
      renderCart();
    });

    menuEl.appendChild(card);
  });
}

/* Render cart */
function renderCart() {
  cartEl.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} — ₹${item.price}`;
    cartEl.appendChild(li);
  });

  totalEl.textContent = total;
}

/* Filters */
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("nav button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderMenu();
  });
});

/* Init */
renderMenu();
renderCart();
