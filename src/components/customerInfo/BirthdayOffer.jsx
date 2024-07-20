import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";

import BirthdayOfferPreview from "./BirthdayOfferPreview";
import BirthdayGiftPreview from "./BirthdayGiftPreview";
const BirthdayOffer = ({ handleOpen, isOffer = false }) => {
  const [openSuccess, setSuccess] = useState(false);
  const data = [
    {
      title: "Decription",
      value: "70% discount Birthday special",
    },
    {
      title: "Birthday Message",
      value: "Happy Birthday !!",
    },
  ];
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">
          {isOffer ? "Birthday Offer ( Review )" : "Birthday Gift ( Review )"}
        </p>
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
            <button
              className="edit-button"
              onClick={() => {
                handleOpen(false);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <button className="menuButton4" onClick={() => setSuccess(true)}>
   {isOffer ? "See Offer Preview" :  "See Customer Gift Preview"}
      </button>

      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        {isOffer ? (
          <BirthdayOfferPreview handleOpen={setSuccess} />
        ) : (
          <BirthdayGiftPreview handleOpen={setSuccess} />
        )}
      </DialogDefault>
    </div>
  );
};

export default BirthdayOffer;
