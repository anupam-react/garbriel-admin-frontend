import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import CatalogueProduct from "./CatalogueProduct";
import InvitationPreview from "./InvitationPreview";
const Invitation = ({ handleOpen }) => {
  const [openAlert, setOpenAlert] = useState(false);
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Invitation Link</p>
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
          <label>Custom Message</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            value="Your slice awaits you. Received a cake voucher when you refer a friend and make your first transaction with us."
            className="input"
          />
        </div>
        <div className="input-container">
          <label>Exclusive Link</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder=""
            value="https://www.Moneychat.com/slic e/referralvoucher"
          />
        </div>
        <div className="input-container">
          <label>Expiry Date</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder=""
            value="12-08-24"
          />
        </div>
      </div>
      <div className="flex-center">
        <button
          className="menuButton"
          onClick={() => {
            setOpenAlert(true);
          }}
        >
         See Invitation Review
        </button>
      </div>
      <DialogDefault open={openAlert} handleOpen={setOpenAlert}>
      <InvitationPreview handleOpen={setOpenAlert}/>
      </DialogDefault>
      
    </div>
  );
};

export default Invitation;
