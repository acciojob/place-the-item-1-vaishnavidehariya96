// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const holder = document.querySelector(".holder");

  // Create a button to add more items dynamically
  const addButton = document.createElement("button");
  addButton.textContent = "Add Item";
  addButton.style.margin = "20px";
  addButton.style.padding = "10px 20px";
  addButton.style.fontSize = "16px";
  addButton.style.cursor = "pointer";
  document.body.insertBefore(addButton, holder);

  // Counter for numbering new items
  let count = holder.children.length + 1;

  // When the button is clicked → add a new flex item
  addButton.addEventListener("click", function () {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.textContent = count++;
    holder.appendChild(newItem);
  });
});