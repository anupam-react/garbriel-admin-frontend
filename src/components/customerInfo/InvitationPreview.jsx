import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import InvitationOffer from "./InvitationOffer";

const InvitationPreview = ({ handleOpen }) => {

  const [openSuccess, setSuccess] = useState(false);

  return (
    <div className="gift-container">
    <div className="gift-main">
      <p className="title">
      Invitation Link
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
        <div className="footer-container">
          <p style={{width:"fit-content"}}>Custom Message</p>
          <p>:</p>
          <p style={{width:"200px"}}>Your slice awaits you. Received a cake voucher when you refer a friend and make your first transaction with us.</p>
          <button
            className="edit-button"
            onClick={() => {
              handleOpen(false);
            }}
          >
            Edit
          </button>
        </div>
        <div className="footer-container">
          <p style={{width:"fit-content"}}>Exclusive Link</p>
          <p>:</p>
          <p style={{width:"200px", color:"#0070BC"}}>http://
            Www.Moneychat.com
            //Slice/refferalvoucher</p>
          <button
            className="edit-button"
            onClick={() => {
              handleOpen(false);
            }}
          >
            Edit
          </button>
        </div>
        <div className="footer-container">
          <p style={{width:"fit-content"}}>Expiration Date</p>
          <p>:</p>
          <p style={{width:"200px"}}>01-10-24</p>
          <button
            className="edit-button"
            onClick={() => {
              handleOpen(false);
            }}
          >
            Edit
          </button>
        </div>
    </div>
    <button className="menuButton" onClick={() => setSuccess(true)}>
    See Invitation Preview
    </button>

    <DialogDefault open={openSuccess} handleOpen={setSuccess}>
      <InvitationOffer handleOpen={setSuccess}/>
    </DialogDefault>
  </div>
  );
};

export default InvitationPreview;
