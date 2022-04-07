import React from "react";
import { Col, Row } from "reactstrap";

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-flex">
        <div className="account-content">
          <p>Transactions/second</p>
          <h4>2,905</h4>
        </div>
        <div className="account-content">
          <p>Total Transactions</p>
          <h4>$64,540,470,129</h4>
        </div>
      </div>
      <div className="account-flex">
        <div className="account-content">
          <p>Avg. Cost/Transactions</p>
          <h4>$0.00025</h4>
        </div>

        <div className="account-content">
          <p>Validator Nodes</p>
          <h4>1,645</h4>
        </div>
      </div>
    </div>
  );
};

export default Account;
