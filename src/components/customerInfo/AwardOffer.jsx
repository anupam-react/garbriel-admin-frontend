import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import AwardCustomer from "./AwardCustomer";
import "./index.scss";
import PromotionPreview from "./PromotionPreview";
const AwardOffer = ({handleOpen}) => {
  const [openCustom, setOpenCustom] = useState(false);
  const [openSuccess, setSuccess] = useState(false);
  const data = [
    {
      title: "Campaign Type",
      value: "Percentage DIscount",
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Decription",
      value: "70% discount Birthday special",
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Reward Type",
      value: "Points",
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Reward Value",
      value: "70%",
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Expiration Date",
      value: "01-10-24",
      handleCLick: () => {
         handleOpen(false);
      },
    },
  ];
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Send Target Promotons</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => {
            handleOpen(false);
          }}
        />
      </div>
      <hr className="hr" />
      <div className="cardContainer">
        <img src="image 710.jpg" alt="" />
        <p>70% Birthday Special Discount</p>
      </div>
      <div className="footer-Main">
        {data?.map((d, i) => (
          <div className="footer-container">
            <p>{d?.title}</p>
            <p>:</p>
            <p>{d?.value}</p>
            <button className="edit-button" onClick={d?.handleCLick}>Edit</button>
          </div>
        ))}
      </div>
      <button className="menuButton" onClick={() => setSuccess(true)}>
      See Promotion Preview
      </button>
      <DialogDefault open={openCustom} handleOpen={setOpenCustom}>
        <AwardCustomer handleOpen={setOpenCustom} />
      </DialogDefault>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <PromotionPreview  handleOpen={setSuccess}/>
      </DialogDefault>
    </div>
  );
};

export default AwardOffer;
