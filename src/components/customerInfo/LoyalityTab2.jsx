import React, { useState } from "react";
import "./index.scss";
import CurrentStamp from "./CurrentStamp";
import RedeemedStamp from "./RedeemedStamp";
import IncompleteStamp from "./IncompleteStamp";
const LoyalityTab2 = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <div className="tabs2-container">
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() => handleLinkClick(0)}
        >
          <p
            className={`${activeLink === 0 ? "activeButton1" : "normalButton"}`}
          >
            Current Stamp Vouchers
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
            Redeemed Stamp Vouchers
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
            Incomplete Stamps
          </p>
          {activeLink === 2 && <hr className="hr4" />}
        </div>
      </div>

      {activeLink === 0 && <CurrentStamp />}
      {activeLink === 1 && <RedeemedStamp />}
      {activeLink === 2 && <IncompleteStamp />}
    </div>
  );
};

export default LoyalityTab2;
