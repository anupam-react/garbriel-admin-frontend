import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import "./index.scss";
import CatalogueProduct2 from "./CatalogueProduct2";
import BounsPreview from "./BounsPreview";
const Bouns = ({ handleOpen }) => {
  const [openSuccess, setSuccess] = useState(false);
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Award Free Bonus</p>
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
      <div className="flex gap-3 items-center">
        <div className="w-[20px] h-[20px] bg-[#00B050] rounded-full"></div>
        <p className="text-[24px] font-[500]">Reward Points</p>
      </div>
      <div className="button-group">
        <button className="button1">50 Points</button>
        <button className="button2">200 Points</button>
        <button className="button1">300 Points</button>
      </div>
      <div className="form-container">
        <div className="input-container">
          <p className="text-[24px] font-[500]">Custom Points</p>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder=""
            value="1000"
          />
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-[20px] h-[20px] bg-[#8F8F8F] rounded-full"></div>
          <p className="text-[24px] font-[500]">Reward Stamps</p>
        </div>
        <div className="button-group">
          <button className="button1">1 Stamps</button>
          <button className="button2">2 Stamps</button>
          <button className="button1">3 Stamps</button>
        </div>
        <div className="catalogue">
          <label>Select Product from catalogue</label>
          <CatalogueProduct2 />
        </div>
        <div className="input-container">
          <p className="text-[24px] font-[500]">Custom Stamps</p>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder=""
            value="5"
          />
        </div>
        <div className="input-container">
          <label className="text-[24px] font-[500]">Description</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="3"
            cols="50"
            className="input"
            value="Enter Customer Message Congratulations! You have been awarded #PointsNumber bonus points on your last #ProductName purchase"
          />
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() => setSuccess(true)}>
          See Award Free Bonus Preview
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <BounsPreview handleOpen={setSuccess} />
      </DialogDefault>
    </div>
  );
};

export default Bouns;
