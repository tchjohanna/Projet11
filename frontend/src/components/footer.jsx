import React from 'react';

// Composant Footer représentant le pied de page
function Footer() {
  return (
    // Le pied de page est enveloppé dans un élément <footer> avec une classe "footer"
    <footer className="footer">
      {/* Un paragraphe affiche le message de copyright avec l'année actuelle */}
      <p className="footer-text">Copyright {new Date().getFullYear()} Argent Bank</p>
    </footer>
  );
}

export default Footer;
