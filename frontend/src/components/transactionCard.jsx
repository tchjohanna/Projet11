import React from "react";

/**
 * Composant de carte de transaction.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre de la transaction.
 * @param {number} props.amount - Le montant de la transaction.
 * @param {string} props.description - La description de la transaction.
 * @returns {JSX.Element} Composant de carte de transaction.
 */
function TransactionCard({ title, amount, description }) {
  // Vérifier si 'amount' est un nombre
  const formattedAmount = typeof amount === "number" ? amount.toFixed(2) : amount;

  return (
    <section className="account">
      {/* Section principale de la carte de transaction */}
      <div className="account-content-wrapper">
        {/* Titre de la transaction */}
        <h3 className="account-title">{title}</h3>
        {/* Montant de la transaction */}
        <p className="account-amount">${formattedAmount}</p>
        {/* Description de la transaction */}
        <p className="account-amount-description">{description}</p>
      </div>
      {/* Section pour le bouton "View transactions" */}
      <div className="account-content-wrapper cta">
        {/* Bouton pour voir les transactions associées */}
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default TransactionCard;
