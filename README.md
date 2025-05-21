# Alpine.js E-commerce

Une application e-commerce simple construite avec Alpine.js, afin de se familiariser avec le framework. Pour simplifier la compréhension et l'exécution, la base à été générée avec l'aide de Copilote (Modèle Claude 3.5 Sonnet)

## Stack Technique

- Alpine.js v3.14.9 - Framework JavaScript léger
- HTML5
- CSS3 (animations et transitions natives)
- Vanilla JavaScript

## Fonctionnalités

- Liste des produits
- Panier dynamique
- Calcul automatique du total
- Animations fluides
- Interface responsive

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (généralement installé avec Node.js)

## Installation

1. Clonez le repository
```bash
git clone https://github.com/votre-username/alpine-ecommerce.git
cd alpine-ecommerce
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez l'application
- Ouvrez le fichier `index.html` dans votre navigateur
- Ou utilisez un serveur local comme Live Server dans VS Code

## Structure du Projet

```
alpine-ecommerce/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── store.js
└── node_modules/
```

## Développement

Pour modifier le projet :
1. Les produits peuvent être édités dans `js/store.js`
2. Les styles sont dans `css/styles.css`
3. La structure principale est dans `index.html`

# Boutique Alpine.js

Une application de boutique en ligne simple construite avec Alpine.js.

## Méthodes principales

### Gestion du panier

- `isInCart(product)`: Vérifie si un produit est présent dans le panier
- `getProductCount(product)`: Retourne le nombre de fois qu'un produit est présent dans le panier
- `addToCart(product)`: Ajoute un produit au panier
- `removeFromCart(item)`: Supprime un produit du panier
- `clearCart()`: Vide complètement le panier
- `toggleCart()`: Ouvre/ferme le panneau du panier

### Calculs

- `cartItemsCount`: Calcule le nombre total d'articles dans le panier
- `cartTotal`: Calcule le montant total du panier

## Fonctionnalités

- Affichage dynamique des produits
- Gestion du panier avec compteur d'articles
- Animation d'ouverture/fermeture du panneau panier
- Indicateur visuel des produits dans le panier avec compteur

## License

MIT
