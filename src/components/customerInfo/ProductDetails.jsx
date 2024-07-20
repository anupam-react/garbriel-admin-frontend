import React, { useState } from 'react'
import "./index.scss";
import { DialogDefault } from '../common/DilogBox';
import InventoryProduct from './InventoryProduct';
const ProductDetails = ({handleOpen}) => {
  const [openProduct, setProduct] = useState(false);
  return (
    <div className='details-container'>
     <p className="details-title">Product Details</p>
        <img
          src="../Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
      />
      <img src="../image 713 (1).png" alt="" className='details-image' onClick={()=>setProduct(true)} />
      <hr className='my-4 bg-[#A2A2A2] w-full'/>
      <div className='details-info'>
        <div className='info2'>
          <p>Product <span className='pl-4'>:</span></p>
  
          <p>Dunkins  Coffee</p>
        </div>
        <div className='info2'>
          <p>Price <span className='pl-4'>:</span></p>
       
          <p>£200</p>
        </div>
        <div className='info2'>
          <p>Date <span className='pl-4'>:</span></p>
         
          <p>10/12/2023</p>
        </div>
        <div className='info2'>
          <p>Available in store <span className='pl-4'>:</span></p>
         
          <div style={{background:"#00B050"}} className='w-[20px] h-[20px] rounded-full'></div>
        </div>
        <div className='info2'>
          <p>Available in online <span className='pl-4'>:</span></p>
          
          <div style={{background:"#D9D9D9"}} className='w-[20px] h-[20px] rounded-full'></div>
        </div>
        <button className="menuButton" onClick={() => handleOpen(false)}>BACK</button>

      </div>
      <DialogDefault open={openProduct} handleOpen={setProduct}>
            <InventoryProduct isProdInfo={true} handleOpen={setProduct}/> 
        </DialogDefault>
    </div>
  )
}

export default ProductDetails
