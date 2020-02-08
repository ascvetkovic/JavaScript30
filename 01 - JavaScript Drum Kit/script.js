// Function to pick exact keyCodes and play sounds
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // Stop function if audio keyCode is not set in html and it is pressed
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
}

// Function to remove class playing when transition is over
function removeTransiotion(e) {
  if (e.propertyName !== "transform") return;
  console.log(this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransiotion));
window.addEventListener("keydown", playSound);
