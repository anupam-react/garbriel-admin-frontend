import React, { useState } from "react";
import "./index.scss";
import MenuCard from "./MenuCard";
const InfoHeader = ({onClose}) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <div className="header-container">
      <div className="header-profile">
        <div className="imageContainer">
          <img
            src="./carbon_user-avatar-filled.png"
            alt=""
            className="image1"
          />
          <img
            src="./solar_menu-dots-bold (2).png"
            alt=""
            onClick={() => setOpenMenu(!isOpenMenu)}
            className="image3"
          />
        </div>
        {isOpenMenu && (
          <div className="menu-Main2">
            <MenuCard onClose={onClose}  setOpenInfo={setOpenMenu}/>
          </div>
        )}
        <div>
          <p>Moneychat</p>
          <p>ID : MC12345</p>
        </div>
      </div>
      {/* <div className="header-profile">
        <img src="./image 696.png" alt="" className="image2" />
        <div>
          <p>Referral Source</p>
          <p>Marketing Campaign</p>
        </div>
      </div> */}
    </div>
  );
};

export default InfoHeader;
