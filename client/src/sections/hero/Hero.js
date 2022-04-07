import React from "react";
import HeroBg from "../../assets/images/hero-bg.png";
import { Button } from "reactstrap";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-info">
            <p>
              Intoducing <span className="text-primary">AKA</span>
              <span className="text-yellow">COIN</span>
            </p>
            <h1>Living Ecosystem Decentralized Token</h1>
            <span>
              Akacoin is a open source peer-to-peer digital currency,community-run technology that supports
              cryptocurrencies and thousands of decentralized applications.
            </span>
            <div className="hero-action">
              <Button color="primary">Get Started</Button>
              <Button className="button-white">
                <BsGithub style={{ marginRight: "15px" }} />
                Source
              </Button>
            </div>
          </div>
        </div>
        <div className="hero-tree">
          <img src={HeroBg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
