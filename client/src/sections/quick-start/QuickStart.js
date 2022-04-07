import React from "react";
import { Row, Col } from "reactstrap";
import QsImg1 from "../../assets/images/wallet-1.png";
import QsImg2 from "../../assets/images/Hand Hold Bitcoin.png";
import QsImg3 from "../../assets/images/Laptop.png";
import QsImg4 from "../../assets/images/Machine.png";

const QuickStart = () => {
  return (
    <div className="container container-ld">
      <div className="about-header">
        <h1>Quick Start</h1>
      </div>
      <Row>
        <Col md={12} lg={6} className="qs-content">
          <div className="qs-image-container">
            <img className="qs-image" src={QsImg1} alt="qs" />
          </div>
          <div className="qs-desc">
            <h3>1. Create Wallet</h3>
            <span>Create a Wallet using either a desktop computer or an mobile device</span>
          </div>
        </Col>
        <Col md={12} lg={6} className="qs-content">
          <div className="qs-image-container">
            <img className="qs-image" src={QsImg2} alt="qs" />
          </div>
          <div className="qs-desc">
            <h3>2. Buy ETH</h3>
            <span>You can buy Ethereum (ETH) directly on MetaMask or transfer it</span>
          </div>
        </Col>
        <Col md={12} lg={6} className="qs-content">
          <div className="qs-image-container">
            <img className="qs-image" src={QsImg3} alt="qs" />
          </div>
          <div className="qs-desc">
            <h3>3. Connect your wallet</h3>
            <span>Access your wallet to AoaSwap by clicking Connect to a wallet</span>
          </div>
        </Col>
        <Col md={12} lg={6} className="qs-content">
          <div className="qs-image-container">
            <img className="qs-image" src={QsImg4} alt="qs" />
          </div>
          <div className="qs-desc">
            <h3>4. Swap ETH to AKO</h3>
            <span>You can start swapping as you have ETH available! Press Select a token </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default QuickStart;
