
// === Current date and last modified function ===
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});



// Static variables temperature and wind speed values (in °C and km/h)
const temperature = 6; 
const condition = 'Partly Cloudy';
const windSpeed = 10;  

// Display static temperature and wind speed in the table
document.querySelector('.table2 tr:nth-child(2) td:last-child').textContent = `${temperature} °C`;
document.querySelector('.table2 tr:nth-child(3) td:last-child').textContent = condition;
document.querySelector('.table2 tr:nth-child(4) td:last-child').textContent = `${windSpeed} km/h`;

// Function to calculate wind chill using Celsius formula
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

// Determine if wind chill should be calculated
let windChillText;
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillText = `${windChill.toFixed(1)} °C`;
} else {
    windChillText = "N/A";
}

// Display the result
document.querySelector('.table2 tr:nth-child(5) td:last-child').textContent = windChillText;
