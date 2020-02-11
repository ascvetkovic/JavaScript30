/* Endpoint */
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// /* Empty array to store data */
const cities = [];

/* Fetch data from endpoint */
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

/* Function to search for words  */
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

/* Function to create commas in numbers */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* Function to display found words */
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  //console.log(matchArray);
  const html = matchArray
    .map(place => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

/* Get .search and .suggestions classes */
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

/* Add Event Listeners on search class */
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
