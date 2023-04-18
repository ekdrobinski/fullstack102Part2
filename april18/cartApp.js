//Function initializes cart in localStorage
function initializeCart() {
    // Check if there's a cart in localStorage
    if (!localStorage.getItem("cart")) {
      // If not, initialize an empty cart
      const initialCart = [];
      // Store the empty cart in localStorage
      localStorage.setItem("cart", JSON.stringify(initialCart));
    }
  }



  // Call the initializeCart function after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    initializeCart();
  });
  

//fixes null issue
  function addItem(item) {
    // Retrieve the cart from localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Add the item to the cart
    cart.push(item);
  
    // Store the updated cart back into localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  

  // Function to remove an item from the cart
  function removeItem(itemId) {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart"));
    // Find the index of the item with the given id in the cart
    let itemIndex = -1;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === itemId) {
        itemIndex = i;
        break;
      }
    }
    //if there is an item in care
    if (itemIndex !== -1) {
      // Remove the item from the cart
      cart.splice(itemIndex, 1);
      // Store the updated cart back into localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  
  //function to display the conntents of the cart
  function displayCart() {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart'));
    // Log the cart contents to the console
    console.log(cart);
  }
  
  //egi vent listener for the add item form
  document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const itemName = document.getElementById("itemName").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemId = new Date().getTime(); // Generate a unique id for the item
    const item = { id: itemId, name: itemName, price: parseFloat(itemPrice) };
    addItem(item);
    // Clear the form fields
    document.getElementById("itemName").value = "";
    document.getElementById('itemPrice').value = "";
  });
  
  // Event listener for the display cart button
  document.getElementById("displayCartButton").addEventListener("click", function() {
    displayCart();
  });
  