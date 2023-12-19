import React from "react";
import Banner from "../../components/Banner";
import "./home_module.scss";
import iconMoney from "../../assets/icon-money.webp";
import iconSecurity from "../../assets/icon-security.webp";
import iconChat from "../../assets/icon-chat.webp";

const HomePage = () => {
  const chatContent = {
    title: "You are our #1 priority",
    text:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  };

  const savingsContent = {
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  };

  const securityContent = {
    title: "Security you can trust",
    text:
      "We use top-of-the-line encryption to make sure your data and money are always safe.",
  };

  return (
    <div className="container">
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon={iconChat}
            title={chatContent.title}
            text={chatContent.text}
          />
          <FeatureItem
            icon={iconMoney}
            title={savingsContent.title}
            text={savingsContent.text}
          />
          <FeatureItem
            icon={iconSecurity}
            title={securityContent.title}
            text={securityContent.text}
          />
        </section>
      </main>
    </div>
  );
};

const FeatureItem = ({ icon, title, text }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default HomePage;
