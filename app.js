// Define variables to select elements from the DOM
var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var addButtons = document.getElementsByClassName("button");

// Define an array of items with their properties
var items = [
  { name: "This was our pact", quantity: 0, dollars: 7, cents: 49 },
  { name: "The famous five", quantity: 0, dollars: 4, cents: 59 },
  { name: "Matilda", quantity: 0, dollars: 6, cents: 80 },
  // Add more items as needed
];

// Function to update the cart display
function updateCart() {
  let cart = 0;
  for (let index = 0; index < items.length; index++) {
    cart += items[index].quantity;
  }
  cartValue.textContent = cart;
}

// Function to update the total price
function updatePrice() {
  let totalPriceInCents = 0;
  for (let index = 0; index < items.length; index++) {
    totalPriceInCents +=
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
  // Convert total price to dollars and cents
  var finalDollars = Math.floor(totalPriceInCents / 100);
  var finalCents = totalPriceInCents % 100;
  // Log the total amount to the console
  console.log(
    "The total amount is " + finalDollars + "$ and " + finalCents + " cents"
  );
}

// Add event listeners to the "Add to Cart" buttons
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function() {
    items[i].quantity++;
    updateCart();
  });
}

// Add event listener to the cart button
cartButton.addEventListener("click", function() {
  // Log the details of items in the cart to the console
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      console.log(
        "Item name: " +
          items[index].name +
          " - Quantity: " +
          items[index].quantity
      );
    }
  }
  // Call the function to update the total price
  updatePrice();
});
