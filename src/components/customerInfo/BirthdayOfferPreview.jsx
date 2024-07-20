import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import BirthdayGiftPay from "./BirthdayGiftPay";

const BirthdayOfferPreview = ({ handleOpen }) => {

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
      <div className="gift-main" >
        <p className="title">Birthday Offer ( Preview )</p>
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
      <div className="flex flex-col items-center gap-4">
      <div className="cardContainer" >
        <img src="image 710.jpg" alt="" />
        <p>70% Birthday Special Discount</p>
      </div>
      <div >
        {data?.map((d, i) => (
          <div className="">
           
              <p className="text-[#12121280] pb-3 text-[20px]">{d?.value}</p>
           
          </div>
        ))}
          </div>
           <button className="menuButton4" onClick={()=> setSuccess(true)}>Send to Customer’s Offer Folder</button>

      </div>
         
           <DialogDefault open={openSuccess} handleOpen={setSuccess}>
              <BirthdayGiftPay handleOpen={setSuccess}/>
        </DialogDefault>
    </div>
  );
};

export default BirthdayOfferPreview;
