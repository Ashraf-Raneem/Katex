import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineGlobal } from "react-icons/ai";

const WalletCard = ({ head, theme, desc }) => {
  return (
    <div className={`wallet-container ${theme}-wallet`}>
      <div className="wallet-header">
        <img src={head.icon} alt="icon"></img>
        <h4>{head.text}</h4>
      </div>
      <div className="wallet-text">{desc}</div>
      <div className="wallet-icons">
        <AiOutlineMobile size="1.5rem" style={{ marginRight: "12px", marginTop: "3px" }} />
        <AiOutlineDesktop size="1.5rem" style={{ marginRight: "12px", marginTop: "3px" }} />
        <AiOutlineGlobal size="1.5rem" style={{ marginRight: "12px", marginTop: "3px" }} />
      </div>
      <div
        className={`wallet-action ${theme === "secondary" ? "advert-action advert-action-secondary" : ""}`}
        style={{ width: theme === "secondary" ? "250px" : "" }}
      >
        <span>Choose Wallet</span>
        <HiOutlineArrowNarrowRight size="2rem" style={{ marginLeft: "12px", marginBottom: "3px" }} />
      </div>
    </div>
  );
};

export default WalletCard;
