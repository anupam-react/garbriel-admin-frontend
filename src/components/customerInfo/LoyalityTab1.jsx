import React, { useState } from "react";
import "./index.scss";
import Transaction from "./Transaction";
import RefferalTable from "./RefferalTable";
import PromotionsTable from "./PromotionsTable";
import MoneyTransferTable from "./MoneyTransferTable";
import RedemptionHistoryTable from "./RedemptionHistoryTable";
import ClaimHistoryTable from "./ClaimHistoryTable";
import { useNavigate } from "react-router-dom";

const LoyalityTab1 = ({handleOpen , onClose}) => {
  const [activeLink, setActiveLink] = useState(0);
  const navigate = useNavigate()
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <div className="tabs1-container text-center">
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() =>{
            if(activeLink === 0) {
            navigate('/loyalty')
            }else{
              handleLinkClick(0)
            }
          }
           }
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
          onClick={() =>{
            if(activeLink === 1) {
              navigate('/loyalty')
            }else{
              handleLinkClick(1)
            }
          }
           }
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
          onClick={() =>{
            if(activeLink === 2) {
              navigate('/loyalty')
            }else{
              handleLinkClick(2)
            }
          }
           }
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
            onClick={() =>{
              if(activeLink === 3) {
                navigate('/loyalty')
              }else{
                handleLinkClick(3)
              }
            }
             }
          >
            Points Earned from Money Transfer Reward
          </p>
          {activeLink === 3 && <hr className="hr4" />}
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <p
            className={`${activeLink === 4 ? "activeButton1" : "normalButton"}`}
            onClick={() =>{
              if(activeLink === 4) {
                navigate('/loyalty')
              }else{
                handleLinkClick(4)
              }
            }
             }
          >
            Point Claim History
          </p>
          {activeLink === 4 && <hr className="hr4" />}
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <p
            className={`${activeLink === 5 ? "activeButton1" : "normalButton"}`}
            onClick={() =>{
              if(activeLink === 5) {
                navigate('/loyalty')
              }else{
                handleLinkClick(5)
              }
            }
             }
          >
            Point Redemption History
          </p>
          {activeLink === 5 && <hr className="hr4" />}
        </div>
      </div>
      {activeLink === 0 && <Transaction onClose={onClose}/>}
      {activeLink === 1 && <RefferalTable onClose={handleOpen}/>}
      {activeLink === 2 && <PromotionsTable />}
      {activeLink === 3 && <MoneyTransferTable />}
      {activeLink === 4 && <ClaimHistoryTable />}
      {activeLink === 5 && <RedemptionHistoryTable />}
    </div>
  );
};

export default LoyalityTab1;
