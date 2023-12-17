const path = require('path');

module.exports = {
  mode: 'development', // ou 'production'
  entry: './frontend/index.js', // Ajustez le chemin en fonction de la structure de votre projet
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/dist'), // Ajustez selon où vous voulez que le bundle soit généré
  },
  // ... autres configurations (loaders, plugins, etc.)
};
