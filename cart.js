// Sample cart functionality
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Example product
const product = {
  name: 'Moisturizer',
  price: 20,
};

// Add product to cart on button click
document.getElementById('add-to-cart').addEventListener('click', () => {
  addToCart(product);
});