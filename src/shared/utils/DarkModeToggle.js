document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toggleButton.innerText = "☀️ Light Mode";
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      toggleButton.innerText = "🌙 Dark Mode";
    }
  }

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(savedTheme);

  // Toggle theme on button click
  toggleButton.addEventListener("click", () => {
    const currentTheme = root.classList.contains("dark") ? "light" : "dark";
    applyTheme(currentTheme);
  });
});