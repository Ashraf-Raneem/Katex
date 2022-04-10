import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { url } from "../utils/urls";

const Admin = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch(url + "content")
      .then((res) => res.json())
      .then((res) => setContent(res))
      .catch((err) => console.log(err));
  });

  return (
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
                <span>Current : Lorem asdkhjawlidh alksdh aolkwhjd alwd aw d</span>
              </div>
              <div className="admin-content-table-action">
                <Button color="primary">Change</Button>
              </div>
            </div>
            <div className="admin-content-table-item">
              <div className="admin-content-table-text">
                <p>Hero Image</p>
                <span>Lorem asdkhjawlidh alksdh aolkwhjd alwd aw d</span>
              </div>
              <div className="admin-content-table-action">
                <Button color="primary">Change</Button>
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
              <Button color="success">Add Wallet</Button>
            </div>
          </div>
          <div className="admin-content-table">
            <div className="admin-content-table-item">
              <div className="admin-content-table-text">
                <p>Hero section desctription</p>
                <span>Lorem asdkhjawlidh alksdh aolkwhjd alwd aw d</span>
              </div>
              <div className="admin-content-table-action">
                <Button color="danger">Remove</Button>
              </div>
            </div>
            <div className="admin-content-table-item">
              <div className="admin-content-table-text">
                <p>Hero Image</p>
                <span>Lorem asdkhjawlidh alksdh aolkwhjd alwd aw d</span>
              </div>
              <div className="admin-content-table-action">
                <Button color="danger">Remove</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
