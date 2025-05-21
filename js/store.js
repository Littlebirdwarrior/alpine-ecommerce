document.addEventListener('alpine:init', () => {
    Alpine.data('store', () => ({
        products: [
            { id: 1, name: 'Produit 1', price: 29.99, image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Produit 2', price: 39.99, image: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Produit 3', price: 49.99, image: 'https://via.placeholder.com/150' }
        ],
        cart: [],
        isCartOpen: false,

        get cartItemsCount() {
            return this.cart.length;
        },

        get cartTotal() {
            return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
        },

        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
            if (this.isCartOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },

        addToCart(product) {
            this.cart.push(product);
            this.isCartOpen = true;
        },

        removeFromCart(product) {
            const index = this.cart.findIndex(item => item.id === product.id);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },

        clearCart() {
            this.cart = [];
        }
    }));
});
