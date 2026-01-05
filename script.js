const data = [
  { id: 1, title: "Espresso", desc: "Strong, concentrated coffee brewed under pressure.", type: "coffee" },
  { id: 2, title: "Cappuccino", desc: "Espresso with steamed milk and foam.", type: "coffee" },
  { id: 3, title: "Cold Brew", desc: "Slow brewed with cold water for 12–18 hours.", type: "coffee" },
  { id: 4, title: "Pour Over", desc: "Manual brewing for clarity and control.", type: "brew" },
  { id: 5, title: "French Press", desc: "Full-bodied immersion brewing.", type: "brew" }
];

let saved = [];
let currentFilter = "all";

const grid = document.getElementById("menuItems");
const list = document.getElementById("cartItems");
const total = document.getElementById("totalPrice");
const filters = document.querySelectorAll(".filter-btn");

function renderCards() {
  grid.innerHTML = "";

  const filtered =
    currentFilter === "all"
      ? data
      : data.filter(item => item.type === currentFilter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <button>Save Note</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      saved.push(item.title);
      renderSaved();
    });

    grid.appendChild(card);
  });
}

function renderSaved() {
  list.innerHTML = "";
  saved.forEach(title => {
    const li = document.createElement("li");
    li.textContent = title;
    list.appendChild(li);
  });
  total.textContent = saved.length;
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCards();
  });
});

renderCards();
renderSaved();
