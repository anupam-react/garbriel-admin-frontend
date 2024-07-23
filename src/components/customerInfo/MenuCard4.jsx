import React, { useState } from 'react'
import { DialogDefault } from '../common/DilogBox'
import BirthDayGift from './BirthDayGift'
import CustomizedBGift from './CustomizedBGift'
import AwardCustomer from './AwardCustomer'
import ProductOverview from './ProductOverview'

const MenuCard4 = ({setOpenInfo}) => {
    const [openGift , setOpenGift] = useState(false)
    const [openOffer , setOpenOffer] = useState(false)
    const [openPromotions , setOpenPromotions] = useState(false)
  return (
   <div className='menu-container3'>
       <button className="menuButton2" onClick={()=> setOpenGift(true)}>Send Birthday Gift</button>
       <button className="menuButton2" onClick={()=> setOpenOffer(true)}>Send Customized Offer</button>
       <button className="menuButton2"  onClick={()=> setOpenPromotions(true)}>Product Overview</button>
          <DialogDefault open={openGift} handleOpen={setOpenGift}>
            <BirthDayGift  handleOpen={setOpenGift} setOpenInfo={setOpenInfo}/>
        </DialogDefault>
          <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
            <CustomizedBGift  handleOpen={setOpenOffer}/>
        </DialogDefault>
          <DialogDefault open={openPromotions} handleOpen={setOpenPromotions}>
            <ProductOverview  handleOpen={setOpenPromotions}/>
        </DialogDefault>
    </div>
  )
}

export default MenuCard4
