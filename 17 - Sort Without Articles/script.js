const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];

// Function to cut out: a, the, an before band name
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

/*const sortedBand = bands.sort(function(a, b) {
  if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
});*/

// Function to sort band names without a, the, an
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// Real band names are not modified
document.querySelector("#bands").innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join("");

console.log(sortedBands);
