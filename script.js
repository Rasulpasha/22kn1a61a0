document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Price: $', ''));
            
            const product = cart.find(item => item.id === productId);
            if (product) {
                product.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }
            
            updateCart();
        });
    });
    
    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';
        let totalAmount = 0;
        
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(li);
            totalAmount += item.price * item.quantity;
        });
        
        document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    }
});
