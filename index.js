// Event listener to start fetching activity on button click
document.getElementById("get-activity").addEventListener("click", function() {
  document.getElementById("activity").textContent = "Fetching..."
  document.getElementById("title").textContent = "FUN/GEN"
  spinButton()
})

// Apply a spinning animation to the button and trigger the fetchActivity function after a delay
function spinButton() {
  const button = document.getElementById("get-activity");
  button.classList.add("spin");

  setTimeout(() => {
    button.classList.remove("spin");
    fetchActivity();
  }, 2000);
}

// Fetch a random activity from an external API
function fetchActivity() {
  fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "KAPOW"
      changeLegendText()
    })
}

// Change the text of all legend elements and apply a temporary style to the activity text
function changeLegendText() {
  const legends = document.querySelectorAll("legend");

  for (const legend of legends) {
    legend.textContent = "BUZZED";
    document.getElementById("activity").classList.add("activity-text-lights");

    setTimeout(() => {
      document.getElementById("activity").classList.remove("activity-text-lights");
    }, 1500);
  }
}
