import React from "react";
import HeadIcon from "../../assets/images/icon-settings.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineGlobal } from "react-icons/ai";

const WalletCard = () => {
  return (
    <div className="wallet-container primary-wallet">
      <div className="wallet-header">
        <img src={HeadIcon} alt="icon"></img>
        <h4>AkaSafe</h4>
      </div>
      <div className="wallet-text">
        Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide
      </div>
      <div className="wallet-icons">
        <AiOutlineMobile size="1.2rem" style={{ marginRight: "12px", marginTop: "3px" }} />
        <AiOutlineDesktop size="1.2rem" style={{ marginRight: "12px", marginTop: "3px" }} />
        <AiOutlineGlobal size="1.2rem" style={{ marginRight: "12px", marginTop: "3px" }} />
      </div>
      <div className="wallet-action">
        <span>Choose Wallet</span>
        <HiOutlineArrowNarrowRight size="1.2rem" style={{ marginLeft: "12px", marginTop: "3px" }} />
      </div>
    </div>
  );
};

export default WalletCard;
