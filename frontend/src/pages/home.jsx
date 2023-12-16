import Feature from '../components/Feature'; // Importer le composant Feature
import { featuresData } from '../data/data'; // Importer les données des fonctionnalités depuis un fichier

function Home() {
  return (
    // Conteneur principal de la page d'accueil
    <main className="homepage">
      <div className="hero">
        {/* Contenu du héros */}
        <section className="hero-content">
          {/* Titre de la section (accessibilité) */}
          <h2 className="sr-only">Promoted Content</h2>
          {/* Messages de sous-titre */}
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          {/* Message principal */}
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      {/* Section des fonctionnalités */}
      <section className='features'>
        {/* Titre de la section (accessibilité) */}
        <h2 className='sr-only'>Features</h2>
        {/* Mapper les données des fonctionnalités pour créer des composants Feature */}
        {featuresData && featuresData.map((feature, index) => (
          <Feature key={index} src={feature.imgSrc} alt={feature.alt} title={feature.title} text={feature.text} />
        ))}
      </section>
    </main>
  );
}

export default Home;
