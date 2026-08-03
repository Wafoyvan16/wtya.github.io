document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".filter-chip");
  const rows = document.querySelectorAll(".ctf-row");

  if (!chips.length || !rows.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");

      const filter = chip.dataset.filter;

      rows.forEach((row) => {
        const cats = (row.dataset.categories || "").split(",");
        const match = filter === "all" || cats.includes(filter);
        row.classList.toggle("is-hidden", !match);
      });
    });
  });
});
