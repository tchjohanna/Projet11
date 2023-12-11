import React from 'react';
// Importez vos composants ici
import Nav from './Nav';
import Hero from './Hero';
import Features from './Features';
import Form from './Form';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Features />
        {/* Vous pouvez inclure le composant Form ici ou ailleurs selon vos besoins */}
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
