import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";


const InvitationOffer = ({ handleOpen }) => {

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
      <div className="flex flex-col justify-center items-center gap-4">
      <div className="cardContainer2 px-8" >
        <img src="image 710.jpg" alt="" className="pb-3 pt-3" />
        <p className="pb-4">70% Birthday Special Discount</p>
      </div>
      <div >
      
          <div className="">
           
              <p className="pb-3 text-[20px] font-[600] w-[300px]">Your slice awaits you. Received a cake voucher when you refer a friend and make your first transaction with us.</p>
              <p className="pb-3 text-[20px] font-[600] w-[300px]">http://Www.Moneychat.com//Slice/
                refferalvoucher</p>
              <p className="pb-3 text-[20px] font-[600] text-[#0070BC] w-[300px]">Exp : 01-10-24</p>
           
          </div>

          </div>
           <button className="menuButton4" onClick={()=> setSuccess(true)}>Send to Customer’s Offer Folder</button>

      </div>
         
           <DialogDefault open={openSuccess} handleOpen={setSuccess}>
           <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">
          Successfully Sent to customer’s Offer Folder
          </p>
        </div>
        </DialogDefault>
    </div>
  );
};

export default InvitationOffer;
