import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import BirthdayOffer from "./BirthdayOffer";
import CatalogueProduct from "./CatalogueProduct";
const BirthDayGift = ({ handleOpen }) => {
  const [openOffer, setOffer] = useState(false);


  return (
   
    <div className="gift-container">
    <div className="gift-main">
      <p className="title">Send Birthday Gift</p>
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
    <div className="catalogue">
      <label>Select Product from catalogue</label>
      <CatalogueProduct />
    </div>
    <div className="form-container">
    <div className="input-container">
          <label>Upload photo/product</label>
         <div className="flex  w-full">
             <label
               for="dropzone-file"
               className="flex justify-end bg-white  shadow rounded-md w-full "
             >
               <div
                 className="flex py-2 px-4 rounded-md text-white gap-2"
                 style={{ backgroundColor: "#00AAEA" }}
               >
                 <p className="text-sm">UPLOAD</p>
               </div>
               <input id="dropzone-file" type="file" className="hidden" />
             </label>
           </div>
           </div>
   
      <div className="input-container">
        <label>Description</label>
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          className="input"
        />
      </div>

      <div className="input-container">
          <label>Enter Birthday Meassage!</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder="Happy Birthday !!"
          />
        </div>

    </div>
    <div className="flex-center">
      <button
        className="menuButton4"
        onClick={() => {
          setOffer(true);
        }}
      >
        See Customer Gift Review
      </button>
    </div>
    <DialogDefault open={openOffer} handleOpen={setOffer}>
  <BirthdayOffer handleOpen={setOffer}/>
    </DialogDefault>
  </div>
  );
};

export default BirthDayGift;
