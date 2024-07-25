import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import ReferalPreview from "./ReferalPreview";

const ReferalDetails = ({ handleOpen , onClose}) => {

  const [openSuccess, setSuccess] = useState(false);
  const data1 = [
    {
      title: "Custom Message",
      value: "Your slice awaits you. Received a cake voucher when you refer a friend and make your first transaction with us.",
      handleCLick: () => {
        handleOpen(false);
    },
    },
  
  ];
  const data2 = [
    {
      title: "Expiration Date",
      value: "01-10-24",
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
      value: "200",
      handleCLick: () => {
        handleOpen(false);
    },
    },
  
  ];

  return (
    <div className="gift-container no-scrollbar">
    <div className="gift-main">
      <p className="title">
      Referral Reward Invitation Link
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
          {data1?.map((d, i) => (
            <div className="footer-container">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2" onClick={d?.handleCLick}>
                Edit
              </button>
            </div>
          ))}
          <div className="footer-container">
              <p>Exclusive Link</p>
              <span>:</span>
              <p className="text-[#0070BC]">http://
                www.Moneychat.com/
                Slice/refferalvoucher</p>
              <button className="edit-button2" onClick={()=> handleOpen(false)}>
                Edit
              </button>
            </div>
            {data2?.map((d, i) => (
            <div className="footer-container">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2" onClick={d?.handleCLick}>
                Edit
              </button>
            </div>
          ))}
        </div>
    <button className="menuButton" onClick={() => setSuccess(true)}>
    See Referral Reward Preview
    </button>

    <DialogDefault open={openSuccess} handleOpen={setSuccess}>
      <ReferalPreview handleOpen={setSuccess} onClose={onClose}/>
    </DialogDefault>
  </div>
  );
};

export default ReferalDetails;
