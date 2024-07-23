import React, { useState } from 'react'
import { DialogDefault } from "../common/DilogBox";
import "./index.scss";

const AwardStamp = ({handleOpen}) => {
    const [openSuccess, setSuccess] = useState(false);
    const [active , setActive] = useState(0)
  return (
 <div className="px-[24px] py-[16px] text-[black] font-[600] no-scrollbar" >
      <div className="gift-main ">
        <p className="title">Award Stamps</p>
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
      
      <div className="button-group">
        <button className={active === 0 ? "button2" : "button1"} style={{fontSize:"18px"}} onClick={()=> setActive(0)}>
          5 Stamps
        </button>
        <button className={active === 1 ? "button2" : "button1"} style={{fontSize:"18px"}} onClick={()=> setActive(1)}>
          10 Stamps
        </button>
        <button className={active === 2 ? "button2" : "button1"} style={{fontSize:"18px"}} onClick={()=> setActive(2)}>
          20 Stamps
        </button>
          </div>
           
      <div className="form-container">
        <div className="input-container">
          <label>Custom Stamps</label>
          <input type="text" name="" id="" className="input" placeholder="" value="40 Stamps"/>
        </div>

        <div className="input-container">
          <label>Description</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="3"
            cols="50"
                      className="input"
                      value="Congratulations! You have been awarded 3 stamps for free. Get one more stamp on your next purchase and you will automatically received a voucher for your 10th cup absolutely free."
          />
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() => {
          setSuccess(true)
          setTimeout(()=>{
            setSuccess(false)
          },2000)
          }}>
          SEND NOTIFICATION
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
         <div className="p-6 ">
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
          <div className='flex justify-center '>
          <img src="./2fa7832afa749ffa404629da1ede8820.gif" alt="" className='w-[120px]' />

          </div>
          <p className='text-center text-black text-[28px] font-[500]'>
          Stamps successfully awarded to the customer
          </p>
        </div>
      </DialogDefault>
    </div>
  )
}

export default AwardStamp
