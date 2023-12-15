// Import des icônes
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";

// Données des fonctionnalités
export const featuresData = [
  {
    imgSrc: chatIcon, // L'icône de discussion
    alt: "Chat Icon", // Texte alternatif pour l'icône
    title: "You are our #1 priority", // Titre de la fonctionnalité
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.", // Texte descriptif
  },
  {
    imgSrc: moneyIcon, // L'icône d'argent
    alt: "Money Icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    imgSrc: securityIcon, // L'icône de sécurité
    alt: "Security Icon",
    title: "Security you can trust",
    text: "We use top-of-the-line encryption to make sure your data and money are always safe.",
  },
];

// Données des transactions
export const transactionData = [
  {
    id: "account1", // Identifiant de la transaction
    title: "Argent Bank Checking (x8349)", // Titre de la transaction
    amount: "$2,082.79", // Montant de la transaction
    description: "Available Balance", // Description de la transaction
  },
  {
    id: "account2",
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: "account3",
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];
