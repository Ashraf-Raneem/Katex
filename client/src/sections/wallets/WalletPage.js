import React, { useEffect, useState } from "react";
import WalletCard from "../../components/wallet/WalletCard";
import Slider from "react-slick";
import { url } from "../../utils/urls";

const WalletPage = () => {
  const [walletData, setData] = useState([]);

  useEffect(() => {
    fetch(url + "wallet")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: walletData && walletData.length > 2 ? 3 : walletData.length,
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

  return (
    <div className="container container-lg">
      <div className="about-header">
        <h1>Choose Your Wallets</h1>
      </div>
      {walletData.length > 0 && (
        <Slider {...settings} className="wallet-cards">
          {walletData.map((item) => (
            <WalletCard key={item.id} head={item.head} theme={item.theme} desc={item.desc} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default WalletPage;
