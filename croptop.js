// Function to add item to cart
function addToCart() {
    // Get item details
    var itemName = "𝕸𝖊𝖊𝖔𝖔 𝕲𝖗𝖆𝖕𝖍𝖎𝖈 𝕿𝖔𝖕-𝖘𝖙𝖎𝖙𝖈𝖍𝖎𝖓𝖌 𝕮𝖗𝖔𝖕 𝕿𝖊𝖊";
    var itemPrice = 100.00;

    // Create object to represent item
    var item = {
        name: itemName,
        price: itemPrice
    };

    // Retrieve existing cart items or initialize as empty array
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart
    cartItems.push(item);

    // Store updated cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to cart page
    window.location.href = "ADD.html";
}
