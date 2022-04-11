import React from "react";
import { Col, Row } from "reactstrap";
import ReplaceImage from "../../assets/images/Replace Image.png";

const Advert = () => {
  return (
    <div className="container container-ld">
      <Row className="advert-container">
        <Col md={12} lg={6} xl={4}>
          <div className="wallet-container primary-wallet">
            <div className="wallet-header advert-header">
              {" "}
              <h4>Akacoin Community</h4>
            </div>
            <div className="wallet-text">
              <p>There's something for everybody. Follow along, chat on Discord, or read up on what we're doing.</p>
            </div>
            <div className="wallet-action advert-action advert-action-primary">
              <span>Learn More</span>
            </div>
          </div>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <div className="wallet-container secondary-wallet">
            <div className="wallet-header advert-header">
              {" "}
              <h4>Become a Validator</h4>
            </div>
            <div className="wallet-text">
              <p>
                Help secure the network by running decentralized infrastructure. Learn about operating a validator node.
              </p>
            </div>
            <div className="wallet-action advert-action advert-action-secondary">
              <span>Learn More</span>
            </div>
          </div>
        </Col>
        <Col md={12} lg={12} xl={4}>
          <div className="wallet-container primary-wallet advert-card-mx">
            <div className="wallet-header advert-header">
              {" "}
              <h4>Dev. Resource</h4>
            </div>
            <div className="wallet-text">
              <p>See the get started guide, videos, tutorials, SDKs, reference implementations, and more.</p>
            </div>
            <div className="wallet-replace-image">
              <img src={ReplaceImage} alt="" />
            </div>
            <div className="wallet-action advert-action advert-action-primary">
              <span>Start Building</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Advert;
