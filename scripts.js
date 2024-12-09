document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const button = document.getElementById("theme-toggle");
    button.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Mode clair"
        : "🌙 Mode sombre";
});
