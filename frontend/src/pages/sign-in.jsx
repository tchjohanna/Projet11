import React from "react";
import FormLogin from "../components/FormLogin";

function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        {/* Icône de l'utilisateur */}
        <i className="fa fa-user-circle sign-in-icon"></i>
        {/* Titre de la page */}
        <h1>Sign In</h1>
        {/* Composant du formulaire de connexion */}
        <FormLogin />
      </section>
    </main>
  );
}

export default SignIn;
