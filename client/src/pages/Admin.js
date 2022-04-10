import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import AddHeroDesc from "../components/modals/AddHeroDesc";
import AddWallet from "../components/modals/AddWallet";
import { url } from "../utils/urls";

const Admin = () => {
  const [hero, setHero] = useState();
  const [wallet, setWallet] = useState();

  const [heroModal, setHeroModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);

  const toggleHeroModal = () => {
    setHeroModal(!heroModal);
  };
  const toggleWalletModal = () => {
    setWalletModal(!walletModal);
  };

  useEffect(() => {
    fetch(url + "hero")
      .then((res) => res.json())
      .then((res) => setHero(res))
      .catch((err) => console.log(err));

    fetch(url + "wallet")
      .then((res) => res.json())
      .then((res) => setWallet(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="container container-ld">
        <div className="admin-header">
          <h3>Admin Dashboard</h3>
        </div>
        <div className="admin-container">
          <div className="admin-content">
            <div className="admin-content-header">
              <div className="admin-content-header-text">
                <h4>Hero Section</h4>
                <span>Change some content of the hero section for the landing page</span>
              </div>
            </div>
            <div className="admin-content-table">
              <div className="admin-content-table-item">
                <div className="admin-content-table-text">
                  <p>Hero section desctription</p>
                  <span>Current : {hero && hero.text}</span>
                </div>
                <div className="admin-content-table-action">
                  <Button color="primary" onClick={toggleHeroModal}>
                    Change
                  </Button>
                </div>
              </div>
              <div className="admin-content-table-item">
                <div className="admin-content-table-text">
                  <p>Hero Image</p>
                  <span>Lorem asdkhjawlidh alksdh aolkwhjd alwd aw d</span>
                </div>
                <div className="admin-content-table-action">
                  <Button color="primary" onClick={toggleHeroModal}>
                    Change
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-content">
            <div className="admin-content-header">
              <div className="admin-content-header-text">
                <h4>Wallets Section</h4>
                <span>Add or delete wallets in the landing page</span>
              </div>
              <div className="admin-content-header-action">
                <Button color="success" onClick={toggleWalletModal}>
                  Add Wallet
                </Button>
              </div>
            </div>
            <div className="admin-content-table">
              {wallet &&
                wallet.map((el) => (
                  <div className="admin-content-table-item">
                    <div className="admin-content-table-text">
                      <p>{el.head.text}</p>
                      <span>{el.desc}</span>
                    </div>
                    <div className="admin-content-table-action">
                      <Button color="danger">Remove</Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Modal size="lg" centered isOpen={heroModal} toggle={toggleHeroModal}>
        <ModalHeader toggle={toggleHeroModal}>Add New Description</ModalHeader>
        <ModalBody>
          <AddHeroDesc toggle={toggleHeroModal} />
        </ModalBody>
      </Modal>
      <Modal size="lg" centered isOpen={walletModal} toggle={toggleWalletModal}>
        <ModalHeader toggle={toggleWalletModal}>Add New Wallet</ModalHeader>
        <ModalBody>
          <AddWallet toggle={toggleWalletModal} />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Admin;
