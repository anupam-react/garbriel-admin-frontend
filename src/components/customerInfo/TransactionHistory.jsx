import React, { useState } from 'react'
import './index.scss'
import InfoHeader from './InfoHeader';
import AppPurchase from './AppPurchase';
import StorePurchase from './StorePurchase';
const TransactionHistory = ({handleOpen}) => {
    const [activeLink, setActiveLink] = useState(0);
    const handleLinkClick = (index) => {
        setActiveLink(index);
    }
  return (
    <div className="info-container">
            <div className="gift-main">
        <p className="title" style={{color:"#000000B2"}}>Transaction  In App Purchase</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
          <InfoHeader />
          <div className='my-4'>
          <button className="menuButton2" onClick={() => handleLinkClick(0)}>Total Spent {activeLink === 0 ? "£2000" : "£3500"} </button>
              
          </div>
   <div className="tabs-container2">
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() => handleLinkClick(0)}
        >
          <p
            className={`${activeLink === 0 ? "activeButton1" : "normalButton"}`}
          >
           IN APP PURCHASE HISTORY
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
           IN STORE PURCHASE HISTORY
          </p>
          {activeLink === 1 && <hr className="hr4" />}
        </div>
      </div>

      {activeLink === 0 && <AppPurchase />}
      {activeLink === 1 && <StorePurchase />}

    
    </div>
  )
}

export default TransactionHistory
