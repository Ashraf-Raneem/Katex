import React from "react";
import { Col, Row } from "reactstrap";
import Logo from "../../assets/images/Logo.png";
import { AiOutlineGithub } from "react-icons/ai";
import { BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container container-ld footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={Logo} alt="" />
          </div>
          <span>Living Ecosystem </span>
          <span>Decentralized Token</span>
          <div className="footer-main-socials">
            <AiOutlineGithub size="2rem" style={{ marginRight: "25px" }} />
            <BsDiscord size="2rem" style={{ marginRight: "25px" }} />
            <BsFacebook size="2rem" style={{ marginRight: "25px" }} />
            <BsInstagram size="2rem" style={{ marginRight: "25px" }} />
          </div>
        </div>
        <div className="footer-sub">
          <Row>
            <Col className="footer-sub-column">
              <h4>Pages</h4>
              <div className="footer-sub-links">
                <span>Network Statistics</span>
                <span>What is AKACOIN</span>
                <span>Wallets</span>
                <span>Quick Start Guide</span>
              </div>
            </Col>
            <Col className="footer-sub-column">
              <h4>Learn</h4>
              <div className="footer-sub-links">
                <span>Blog</span>
                <span>Video</span>
                <span>Podcasts</span>
                <span>Network states</span>
              </div>
            </Col>
            <Col className="footer-sub-column">
              <h4>Support </h4>
              <div className="footer-sub-links">
                <span>Customer Service</span>
                <span>FAQ</span>
                <span>Community</span>
              </div>
            </Col>
            <Col className="footer-sub-column">
              <h4>About AKA.coin</h4>
              <div className="footer-sub-links">
                <span>About Us</span>
                <span>Privacy Policy</span>
                <span>Terms of use</span>
                <span>Quick Start Guide</span>
                <span>Language Support</span>
                <span>Cookie Policy</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-index">©2022 AKA.COIN. All right reserved</div>
    </div>
  );
};

export default Footer;
