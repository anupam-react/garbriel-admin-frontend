import React, { useState } from "react";
import "./index.scss";
import Transaction from "./Transaction";
import RefferalTable from "./RefferalTable";
import PromotionsTable from "./PromotionsTable";
import MoneyTransferTable from "./MoneyTransferTable";
import RedemptionHistoryTable from "./RedemptionHistoryTable";
import ClaimHistoryTable from "./ClaimHistoryTable";

const LoyalityTab1 = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <div className="tabs1-container">
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() => handleLinkClick(0)}
        >
          <p
            className={`${activeLink === 0 ? "activeButton1" : "normalButton"}`}
          >
            Points Earned From Transaction
          </p>
          {activeLink === 0 && <hr className="hr4" />}
        </div>
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() => handleLinkClick(1)}
        >
          <p
            className={`${activeLink === 1 ? "activeButton1" : "normalButton"}`}
          >
            Points Earned from Referral
          </p>
          {activeLink === 1 && <hr className="hr4" />}
        </div>
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() => handleLinkClick(2)}
        >
          <p
            className={`${activeLink === 2 ? "activeButton1" : "normalButton"}`}
          >
            Target Customized Promotions Points
          </p>
          {activeLink === 2 && <hr className="hr4" />}
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <p
            className={`${activeLink === 3 ? "activeButton1" : "normalButton"}`}
            onClick={() => handleLinkClick(3)}
          >
            Points Earned from Money Transfer Reward
          </p>
          {activeLink === 3 && <hr className="hr4" />}
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <p
            className={`${activeLink === 4 ? "activeButton1" : "normalButton"}`}
            onClick={() => handleLinkClick(4)}
          >
            Point Claim History
          </p>
          {activeLink === 4 && <hr className="hr4" />}
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <p
            className={`${activeLink === 5 ? "activeButton1" : "normalButton"}`}
            onClick={() => handleLinkClick(5)}
          >
            Point Redemption History
          </p>
          {activeLink === 5 && <hr className="hr4" />}
        </div>
      </div>
      {activeLink === 0 && <Transaction />}
      {activeLink === 1 && <RefferalTable />}
      {activeLink === 2 && <PromotionsTable />}
      {activeLink === 3 && <MoneyTransferTable />}
      {activeLink === 4 && <ClaimHistoryTable />}
      {activeLink === 5 && <RedemptionHistoryTable />}
    </div>
  );
};

export default LoyalityTab1;
