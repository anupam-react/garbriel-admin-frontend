import React, { useState } from 'react'
import "./index.scss";
const ProductOverview = ({handleOpen}) => {

  return (
    <div className='details-container'>
     <p className="details-title">Product Details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={()=> handleOpen(false)}
      />
      <img src="./image 713 (1).png" alt="" className='details-image' />
      <hr className='my-4 bg-[#A2A2A2] w-full'/>
      <div className='details-info'>
        <div className='info2'>
          <p>Product <span className='pl-4'>:</span></p>
  
          <p>Dunkins  Burger</p>
        </div>
        <div className='info2'>
          <p>Price <span className='pl-4'>:</span></p>
       
          <p>£200</p>
        </div>
        <div className='info2'>
          <p>Last Date Visit <span className='pl-4'>:</span></p>
         
          <p>10/12/2023</p>
        </div>
        <div className='info2'>
          <p>Timings <span className='pl-4'>:</span></p>
         
          <p>11:05 pm </p>
        </div>
     

      </div>
   
    </div>
  )
}

export default ProductOverview
