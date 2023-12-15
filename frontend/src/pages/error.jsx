import { Link } from "react-router-dom";

function Error() {
  return (
    // Conteneur principal de la page d'erreur
    <div className="errorpage">
      <div className="hero">
        {/* Contenu du héros */}
        <section className="hero-content">
          {/* Titre de la page (accessibilité) */}
          <h2 className="sr-only">Error page</h2>
          
          {/* Message d'erreur 404 */}
          <p className="subtitle">404 - Oups! La page que vous demandez n'existe pas.</p>
          
          {/* Lien pour retourner à la page d'accueil */}
          <p className="text">
            <Link to="/">Retourner sur la page d'accueil</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Error;
