// script.js

// Add event listeners for buy buttons and submit button
const buyButtons = document.querySelectorAll('.buy-btn');
const submitButton = document.querySelector('.submit-btn');

buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

submitButton.addEventListener('click', submitForm);

// Function to handle adding items to the cart
function addToCart() {
  // Get the product details from the clicked button's parent element
  const product = this.parentElement;
  const productName = product.querySelector('h2').textContent;
  const productPrice = product.querySelector('p').textContent;

  // Create a cart item element
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <h3>${productName}</h3>
    <p>${productPrice}</p>
  `;

  // Append the cart item to the cart
  const cart = document.getElementById('cart-items');
  cart.appendChild(cartItem);
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  // Get the form inputs
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Create an object to store the form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Print the form data to the console (you can modify this to send the data to a server)
  console.log(formData);

  // Reset the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}
