import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import CatalogueProduct from "./CatalogueProduct";
import ReferalDetails from "./ReferalDetails";
const Referal = ({ handleOpen }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [isActive, setActive] = useState(1);
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Referral Reward</p>
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
        <div>
          <p>Type Of Reward</p>
      <div className="flex gap-4 mb-4">
        <button className={isActive === 1 ? "button2" : "button1"} onClick={()=>setActive(1)}>
        Points
        </button>
        <button className={isActive === 2 ? "button2" : "button1"} onClick={()=>setActive(2)}>
        Stamps
        </button>
      </div>
    {isActive === 1 ?  <div className="button-group">
        <button className="button2">
          50 Points
        </button>
        <button className="button1">
          200 Points
        </button>
        <button className="button1">
          300 Points
        </button>
      </div> : 
      <div className="button-group">
        <button className="button2">
          5 Stamps
        </button>
        <button className="button1">
          20 Stamps
        </button>
        <button className="button1">
          30 Stamps
        </button>
      </div>
      
      }
        </div>
        <div className="input-container">
          <label>Custom Points</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder=""
            value="1000 Points"
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
         See Referral Reward Review
        </button>
      </div>
      <DialogDefault open={openAlert} handleOpen={setOpenAlert}>
      <ReferalDetails handleOpen={setOpenAlert}/>
      </DialogDefault>  
    </div>
  );
};

export default Referal;
