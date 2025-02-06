import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [theme, setTheme] = useState("light"); // Default to light until theme is loaded
  const [loaded, setLoaded] = useState(false); // Mark as loaded once client-side hydration is complete

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load theme from localStorage or system preference
      const savedTheme = localStorage.getItem("theme") || 
                         (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

      setTheme(savedTheme); // Update state with loaded theme
      document.documentElement.classList.toggle("dark", savedTheme === "dark"); // Apply the theme
      setLoaded(true); // Mark the component as loaded
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme); // Update state
    document.documentElement.classList.toggle("dark", newTheme === "dark"); // Apply theme to HTML
    localStorage.setItem("theme", newTheme); // Save theme in localStorage
  };

  // If component hasn't loaded yet, don't render to avoid hydration errors
  if (!loaded) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}