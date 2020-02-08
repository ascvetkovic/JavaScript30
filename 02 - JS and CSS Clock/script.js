// Function to get current time and start the clock
(function startTime() {
  const today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds(),
    // Grab divs with exact ids
    secondsStick = document.getElementById("seconds-stick"),
    minutesStick = document.getElementById("minutes-stick"),
    hoursStick = document.getElementById("hours-stick");

  // Add class transform on all grabbed divs
  secondsStick.style.transform = "rotate(" + seconds * 6 + "deg)"; // Find and rotate seconds stick to degree for current seconds
  minutesStick.style.transform =
    "rotate(" + (minutes * 6 + seconds / 10) + "deg)"; // Find and rotate minutes stick to degree for current minutes
  hoursStick.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)"; // Find and rotate hours stick to degree for current hours

  setTimeout(startTime, 500); // Start function every 500 milliseconds i.e. 0.5 seconds
})();

// Function to create clock border sticks
(function rotateString() {
  var secString = document.querySelectorAll("span"),
    i;

  // Clock border sticks for minutes
  for (i = 0; i < secString.length; i = i + 1) {
    secString[i].style.transform = "rotate(" + i * 6 + "deg)";
    secString[i].style.height = "2px";
  }

  // Clock border sticks for hours
  for (i = 0; i < secString.length; i = i + 5) {
    secString[i].style.height = "10px";
  }
})();
