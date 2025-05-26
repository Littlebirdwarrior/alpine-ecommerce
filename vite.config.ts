// Import de la fonction defineConfig de Vite qui fournit l'autocomplétion TypeScript
import { defineConfig } from 'vite'
// Import du plugin Tailwind CSS pour le post-processing CSS
import tailwindcss from 'tailwindcss'
// Import d'Autoprefixer pour ajouter automatiquement les préfixes vendeurs CSS
import autoprefixer from 'autoprefixer'

export default defineConfig({
  // Configuration de la construction du projet
  build: {
    // Définit le répertoire de sortie pour les fichiers construits
    outDir: 'dist',
    // Options de configuration Rollup pour le bundling
    rollupOptions: {
      // Points d'entrée de l'application
      input: {
        // Point d'entrée principal - fichier HTML racine
        main: './index.html',
      }
    }
  },
  // Configuration CSS
  css: {
    // Configuration PostCSS
    postcss: {
      // Plugins PostCSS à utiliser
      plugins: [tailwindcss, autoprefixer]
    }
  },
  // Configuration du serveur de développement
  server: {
    // Ouvre automatiquement le navigateur au démarrage
    open: true,
    // Port sur lequel le serveur de développement s'exécutera
    port: 3000
  }
})
