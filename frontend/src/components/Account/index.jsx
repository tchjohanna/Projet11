import React from "react";
import "./account_module.scss";

function Account({ title, amount, description, onViewTransactions }) {
  return (
    <section className="account">
      <div className="account-content">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-description">{description}</p>
      </div>
      <div className="account-cta">
        <button className="transaction-button" onClick={onViewTransactions}>
          View transactions
        </button>
      </div>
    </section>
  );
}

export default Account;
