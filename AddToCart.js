// Retrieve cart items from local storage
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to add all items to the cart
function addAllToCart() {
    // Get all product elements
    var products = document.querySelectorAll('.single-product');

    // Loop through each product
    products.forEach(function(product) {
        // Extract item details from the product element
        var itemName = product.querySelector('h1').textContent;
        var itemPrice = parseFloat(product.querySelector('h4').textContent.replace('$', ''));

        // Create object to represent item
        var item = {
            name: itemName,
            price: itemPrice
        };

        // Add the new item to the cart
        cartItems.push(item);
    });

    // Store updated cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to cart page
    window.location.href = "ADD.html";
}

// Display cart items and calculate total price
var cartContainer = document.getElementById('cartItems');
var totalPrice = 0;
cartItems.forEach(function(item, index) {
    var productDiv = document.createElement('div');
    var itemPrice = item.price.toFixed(2);
    productDiv.innerHTML = item.name + ' - $' + itemPrice + ' <button class="remove-btn" data-index="' + index + '">Remove</button>';
    cartContainer.appendChild(productDiv);
    totalPrice += item.price;
});

// Display total price
var totalDiv = document.createElement('div');
totalDiv.innerHTML = '»»———- 𝕿𝖔𝖙𝖆𝖑 𝕻𝖗𝖎𝖈𝖊: $' + totalPrice.toFixed(2) + ' ———-««';
cartContainer.appendChild(totalDiv);

// Add event listener to handle item removal
cartContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-btn')) {
        var indexToRemove = event.target.dataset.index;
        cartItems.splice(indexToRemove, 1); // Remove the item from the cart array
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
        location.reload(); // Refresh the page to reflect the changes
    }
});
