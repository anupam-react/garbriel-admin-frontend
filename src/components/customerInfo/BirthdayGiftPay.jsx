import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate } from "react-router-dom";

const BirthdayGiftPay = ({ handleOpen }) => {

  const navigate = useNavigate("")
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
           <button className="menuButton" onClick={()=> navigate('/inventory/payment')}>Pay £1</button>

      </div>
         
        
    </div>
  );
};

export default BirthdayGiftPay;
