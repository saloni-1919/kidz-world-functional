// Define variables to select elements from the DOM

var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var addButtons = document.getElementsByClassName("button");

// Define an array of items with their properties
var items = [
  { name: "This was our pact", quantity: 0, dollars: 7},
  { name: "The famous five", quantity: 0, dollars: 4 },
  { name: "Matilda", quantity: 0, dollars: 6},
  { name: "Harry Potter", quantity: 0, dollars: 10},
  { name: "For Young Readers", quantity: 0, dollars: 7},
  { name: "Wimpy Kid - DIY", quantity: 0, dollars: 4 },
  { name: "Dart Board", quantity: 0, dollars: 17},
  { name: "Connect 4", quantity: 0, dollars:19 },
  { name: "Jenga", quantity: 0, dollars: 20},
  { name: "Monopoly", quantity: 0, dollars: 19},
  { name: "Bookmarks", quantity: 0, dollars: 12},
  { name: "Birthday card", quantity: 0, dollars: 19 },
  { name: "Stuffed toys", quantity: 0, dollars: 15 },
  { name: "Dream catcher drawing", quantity: 0, dollars: 18},
  

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
  let totalPrice= 0;
  for (let index = 0; index < items.length; index++) {
    totalPrice +=
      items[index].quantity * (items[index].dollars );
  }

  
  // Log the total amount to the console
  console.log(
    "The total amount is " + totalPrice + "$ and " 
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






























