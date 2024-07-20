import React, { useState } from 'react'
import './index.scss'
import { DialogDefault } from '../common/DilogBox'
const TransactionDetails = ({handleOpen , isButton= true}) => {
  const [openDownload , setOpenDownload] = useState(false)
  const [openShare , setOpenShare] = useState(false)
  return (
     <div className='details-container'>
     <p className="details-title pb-8">Transaction Details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
      />
      <div className='h-[60vh] overflow-y-scroll no-scrollbar'>
      <div className='flex items-center justify-center gap-2'>
          <img src="../Ellipse 9.png" alt="" className='w-[75px] h-[75px]'/>
          <div>
            <p className='text-[#121212] font-semibold text-[24px]'>Cafe Elite</p>
            <p className='text-[#121212]'>Cafe Elite</p>
          </div>

      </div>
          <p className='text-[#8F8F8F] text-center pb-2'>Address : Lorem ipsum , 23-10
         <p> Contact : 11233455</p>
          </p>
         <div className='border border-[#000000] border-dashed w-[400px]'></div>
         <p className='text-[#121212] text-[24px] font-[500] text-center'>RECEIPT</p>
         <div className='border border-[#000000] border-dashed w-[400px]'></div>
      <div className='details-info text-[#8F8F8F]'>
        <div className='info2'>
          <p>Receipt No</p>
          <p>90991</p>
        </div>
        <div className='info2'>
          <p>Date & Time</p>
          <p>12-09-24,7:00 Pm</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p className='text-[#121212] font-semibold'>Name</p>
          <p className='text-[#121212] font-semibold'>Jhon Deo</p>
        </div>
        <div className='info2'>
          <p className='text-[#121212]'>Items</p>
          <p className='text-[#121212]'>Price</p>
        </div>
        <div className='info2'>
          <p>Lorem</p>
          <p>£15</p>
        </div>
        <div className='info2'>
          <p>Lorem</p>
          <p>£15</p>
        </div>
        <div className='info2'>
          <p>Lorem</p>
          <p>£15</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p className='text-[#121212] font-semibold'>Total</p>
          <p className='text-[#121212] font-semibold'>£45</p>
        </div>
        <div className='info2'>
          <p>Discount</p>
          <p>£5.0</p>
        </div>
        <div className='info2'>
          <p>VAT(Registration No)</p>
          <p>1234567</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p className='text-[#121212] font-semibold'>Rewards</p>
          <p className='text-[#121212] font-semibold'>01</p>
        </div>
        <div className='info2'>
          <p>Points</p>
          <p>00</p>
        </div>
        <div className='info2'>
          <p>Stamps</p>
          <p>01</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p >Payment Method</p>
          <p >Linked Card</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
          </div>
          <div className='flex flex-col items-center gap-2'>
 <p className='text-center text-[24px] text-[121212] font-semibold'>THANK YOU !</p>
 <img src="../Frame 38456.png" alt="" />

          </div>
      </div>
          <hr className='w-full bg-[#000000] my-6' />
         
        {isButton && <div className='button-container3'>
              <button className='menuButton4' onClick={()=>setOpenDownload(true)}>Download Reciept</button>
              <button className='menuButton4' onClick={()=>setOpenShare(true)}>Share Reciept</button>
          </div>}
          <DialogDefault open={openDownload} handleOpen={setOpenDownload}>
           <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
          Transaction receipt downloaded
          </p>
        </div>
        </DialogDefault>
          <DialogDefault open={openShare} handleOpen={setOpenShare}>
           <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
          Transaction receipt  Shared
          </p>
        </div>
        </DialogDefault>
    </div>
  )
}

export default TransactionDetails
