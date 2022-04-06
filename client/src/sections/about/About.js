import React from "react";
import AboutAside from "../../assets/images/about-aside.png";
import AsideVideo from "../../assets/images/about-video.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div className="container container-lg">
      <div className="about-header">
        <h1>What is Akacoin ?</h1>
      </div>
      <div className="about-content">
        <div className="about-aside">
          <h2>The fastest growing and community friendly </h2>
          <div className="about-aside-image">
            <img src={AboutAside} alt="about-img"></img>
          </div>
        </div>
        <div className="about-video">
          <div className="about-video-text">
            <p>
              Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands
              of projects spanning DeFi, NFTs, Web3 and more.
            </p>
            <div className="about-video-text-link">
              <a className="link">Explore System</a>
              <HiOutlineArrowNarrowRight size="1.2rem" style={{ marginLeft: "12px", marginTop: "3px" }} />
            </div>
          </div>
          <div className="about-video-image">
            <img src={AsideVideo} alt="about-vid"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
