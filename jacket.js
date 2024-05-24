function addToCart() {
    // Get item details
    var itemName = "𝕸𝖊𝖊𝖔𝖔 𝕿𝖊𝖉𝖉𝖞 𝕷𝖎𝖓𝖊𝖉 𝕻𝖀 𝕷𝖊𝖆𝖙𝖍𝖊𝖗 𝕵𝖆𝖈𝖐𝖊𝖙";
    var itemPrice = 550.00;

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
