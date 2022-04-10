import React, { useState, useEffect } from "react";
import HeroBg from "../../assets/images/hero-bg.png";
import { Button } from "reactstrap";
import { BsGithub } from "react-icons/bs";
import { url } from "../../utils/urls";

const Hero = () => {
  const [heroData, setHeroData] = useState();

  useEffect(() => {
    fetch(url + "hero")
      .then((res) => res.json())
      .then((res) => {
        setHeroData(res);
      })
      .catch((err) => console.log(err));
  }, []);

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
            <span>{heroData && heroData.text}</span>
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
          <img src={HeroBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
