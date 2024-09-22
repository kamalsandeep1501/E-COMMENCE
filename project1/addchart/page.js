document.addEventListener("DOMContentLoaded", () => {
    const itemSelect = document.getElementById("item");
    const sizeSelect = document.getElementById("size");
    const quantityInput = document.getElementById("quantity");
    const addBtn = document.getElementById("addBtn");
    const cartDiv = document.getElementById("cart");
    const orderBtn = document.getElementById("orderBtn");

    const cart = [];

    addBtn.addEventListener("click", () => {
        const item = itemSelect.value;
        const size = sizeSelect.value;
        const quantity = quantityInput.value;
        
        const cartItem = { item, size, quantity };
        cart.push(cartItem);
        updateCart();
    });

    function updateCart() {
        cartDiv.innerHTML = "";
        cart.forEach((cartItem, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <span>${cartItem.item} (${cartItem.size}) - Quantity: ${cartItem.quantity}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartDiv.appendChild(itemDiv);
        });
    }

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    orderBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Order placed!");
            cart.length = 0; // Clear the cart
            updateCart();
        }
    });
});
