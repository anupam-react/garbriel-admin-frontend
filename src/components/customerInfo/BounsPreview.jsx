import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import "./index.scss";

const BounsPreview = ({ handleOpen }) => {
  const [openSuccess, setSuccess] = useState(false);
  return (
    <div className="gift-container no-scrollbar" style={{height:"400px"}}>
      <div className="gift-main">
        <p className="title">Award Free Bonus Preview</p>
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
  
      <div className="form-container">
        <div className="input-container">
          <label className="text-[24px] font-[500]">Notification Preview</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="3"
            cols="50"
            placeholder="Congratulations! You have been awarded # 200 bonus points on your last #ProductName purchase"
                      className="input"
                      value=""
          />
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() => setSuccess(true)}>
        SEND NOTIFICATION 
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
         <div >
          <div className="cross-image2">
            <img
              src="./Mask group (2).png"
              alt=""
              className=""
              onClick={() => {
                setSuccess(false);
              }}
            />
          </div>
          <div className="text-black text-[32px] flex flex-col items-center px-10 pb-4 text-center ">
          <img src="./success.gif" alt="" className="w-[150px] h-[150px]"/>
          <p>
          Your Point bus has been sent to MC12345.
          </p>

          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default BounsPreview;
