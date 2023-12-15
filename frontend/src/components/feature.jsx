import React from 'react';

// Composant Feature représentant une caractéristique ou une fonctionnalité
// Il accepte les propriétés src, alt, title et text pour afficher une image, un titre et un texte.
function Feature({ src, alt, title, text }) {
  return (
    <div className='feature-item'>
      {/* Affiche l'image avec la source (src) fournie et un texte alternatif (alt) */}
      <img src={src} alt={alt} className='feature-icon' />

      {/* Affiche le titre (title) de la caractéristique */}
      <h3 className='feature-item-title'>{title}</h3>

      {/* Affiche le texte (text) de la caractéristique */}
      <p>{text}</p>
    </div>
  );
}

export default Feature;
