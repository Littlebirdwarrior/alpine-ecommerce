/**
 * Initialise le store Alpine.js lors du chargement
 */
document.addEventListener('alpine:init', () => {
    // Je vais créer un store Alpine.js pour gérer le panier  
    Alpine.data('store', () => ({
        /** @type {Array<{id: number, name: string, price: number, image: string}>} */
        products: [
            { id: 1, name: 'Produit 1', price: 29.99, image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Produit 2', price: 39.99, image: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Produit 3', price: 49.99, image: 'https://via.placeholder.com/150' }
        ],
        // Mes éléments sont stockés dans un tableau vide
        /** @type {Array<{id: number, name: string, price: number, image: string}>} */
        cart: [],
        // Par défaut, mon panier est fermé
        /** @type {boolean} */
        isCartOpen: false,

        // Mes méthodes
        /**
         * Obtient le nombre total d'articles dans le panier
         * @returns {number} Nombre d'articles dans le panier
         */
        get cartItemsCount() {
            return this.cart.length;
        },

        /**
         * Calcule le montant total du panier
         * @returns {string} Montant total formaté avec 2 décimales
         */
        get cartTotal() {
            return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
        },

        /**
         * Bascule l'affichage du panier
         */
        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
            if (this.isCartOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },

        /**
         * Ajoute un produit au panier
         * @param {Object} product - Le produit à ajouter
         * @param {number} product.id - ID du produit
         * @param {string} product.name - Nom du produit
         * @param {number} product.price - Prix du produit
         * @param {string} product.image - URL de l'image du produit
         */
        addToCart(product) {
            this.cart.push(product);
            this.isCartOpen = true;
        },

        /**
         * Retire un produit du panier
         * @param {Object} product - Le produit à retirer
         * @param {number} product.id - ID du produit à retirer
         */
        removeFromCart(product) {
            const index = this.cart.findIndex(item => item.id === product.id);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },

        /**
         * Vide complètement le panier
         */
        clearCart() {
            this.cart = [];
        },

        /**
         * Vérifie si un produit est dans le panier
         * @param {Object} product - Le produit à vérifier
         * @param {number} product.id - ID du produit
         * @returns {boolean} True si le produit est dans le panier
         */
        isInCart(product) {
            return this.cart.some(item => item.id === product.id);
        },

        /**
         * Compte le nombre de fois qu'un produit est dans le panier
         * @param {Object} product - Le produit à compter
         * @param {number} product.id - ID du produit
         * @returns {number} Nombre d'occurrences du produit
         */
        getProductCount(product) {
            return this.cart.filter(item => item.id === product.id).length;
        }
    }));
});
