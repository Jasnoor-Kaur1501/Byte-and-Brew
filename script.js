const buttons = document.querySelectorAll(".rail-btn");
const panels = document.querySelectorAll(".panel");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.view).classList.add("active");
  });
});
