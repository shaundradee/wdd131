document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the current count or default to 0
  let count = Number(localStorage.getItem("reviewCount")) || 0;

  // Increment and update localStorage
  count++;
  localStorage.setItem("reviewCount", count);

  // Display the count
  document.getElementById("reviewCount").textContent = count;
});