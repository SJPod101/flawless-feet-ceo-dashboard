const ranges = {
  week: {
    revenue: "£38.4k",
    rebook: "84%",
    utilisation: "76%",
    missed: "£4.8k",
  },
  month: {
    revenue: "£146k",
    rebook: "82%",
    utilisation: "73%",
    missed: "£16.2k",
  },
  quarter: {
    revenue: "£421k",
    rebook: "81%",
    utilisation: "78%",
    missed: "£42.5k",
  },
  year: {
    revenue: "£1.64m",
    rebook: "79%",
    utilisation: "74%",
    missed: "£168k",
  },
};

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-view]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const values = ranges[button.dataset.view];
    Object.entries(values).forEach(([key, value]) => {
      const node = document.querySelector(`[data-metric="${key}"]`);
      if (node) node.textContent = value;
    });
  });
});
