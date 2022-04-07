import React from "react";
import WalletCard from "../../components/wallet/WalletCard";

const WalletPage = () => {
  return (
    <div className="container container-lg">
      <div className="about-header">
        <h1>Choose Your Wallets</h1>
      </div>
      <div className="wallet-cards">
        <WalletCard />
      </div>
    </div>
  );
};

export default WalletPage;
