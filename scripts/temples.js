document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open");

        // toggle icon coding 
        if (menuButton.textContent === "☰") {
            menuButton.textContent = "x";
        } else {
            menuButton.textContent = "☰";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});
