const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
// Grab items from localStorage or if the localStorage is empty, items should be empty array
let items = JSON.parse(localStorage.getItem("items")) || [];
const uncheck = document.querySelector(".uncheck");
const check = document.querySelector(".check");
const clearbutton = document.querySelector(".clear");

// Function to add new item
function addItem(e) {
  e.preventDefault(); // Don't reload page
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };

  // Add new item to list
  items.push(item);
  // Display new item as list item with HTML
  populateList(items, itemsList);
  // Save to localStorage
  localStorage.setItem("items", JSON.stringify(items));
  this.reset(); // Clear form fields
}

// Function to display new item in the list
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

// Function to persist checked and unchecked state for the checkboxes
function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  //console.log(e.target);
  const el = e.target;
  //console.log(el.dataset.index);
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// Function to check all items from the list
function checkAll() {
  items.forEach(item => (item.done = true));
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// Function to uncheck all checked items from the list
function unCheckAll() {
  items.forEach(item => (item.done = false));
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// Function to clear (delete) items from the localStorage
function clearAll() {
  localStorage.clear();
  items = [];
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
check.addEventListener("click", checkAll);
uncheck.addEventListener("click", unCheckAll);
clearbutton.addEventListener("click", clearAll);

populateList(items, itemsList);
