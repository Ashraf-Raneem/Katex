import React from "react";
import WalletCard from "../../components/wallet/WalletCard";
import { walletData } from "../../utils/Data";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const WalletPage = () => {
  return (
    <div className="container container-lg">
      <div className="about-header">
        <h1>Choose Your Wallets</h1>
      </div>
      <Slider {...settings} className="wallet-cards">
        {walletData.map((item) => (
          <WalletCard key={item.id} head={item.head} theme={item.theme} desc={item.desc} />
        ))}
      </Slider>
    </div>
  );
};

export default WalletPage;
