// Function to update time and date
function updateClock() {
  const timeElement = document.getElementById("time");
  const ampmElement = document.getElementById("ampm");
  const dateElement = document.getElementById("date");

  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isPM = hours >= 12;

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Pad values
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  timeElement.textContent = `${h}:${m}:${s}`;
  ampmElement.textContent = isPM ? "PM" : "AM";

  // Format date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  dateElement.textContent = `${dayName}, ${monthName} ${day}, ${year}`;
}

// Call once immediately and set interval
updateClock();
setInterval(updateClock, 1000);

// Theme toggle functionality
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
