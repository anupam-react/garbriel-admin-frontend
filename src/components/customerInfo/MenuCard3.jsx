import React, { useState } from 'react'
import { DialogDefault } from '../common/DilogBox'
import BirthDayGift from './BirthDayGift'
import CustomizedBGift from './CustomizedBGift'
import AwardCustomer from './AwardCustomer'

const MenuCard3 = ({setOpenInfo}) => {
    const [openGift , setOpenGift] = useState(false)
    const [openOffer , setOpenOffer] = useState(false)
    const [openPromotions , setOpenPromotions] = useState(false)
  return (
   <div className='menu-container3'>
       <button className="menuButton2" onClick={()=> setOpenGift(true)}>Send Birthday Gift</button>
       <button className="menuButton2" onClick={()=> setOpenOffer(true)}>Send Customized Offer</button>
       <button className="menuButton2"  onClick={()=> setOpenPromotions(true)}>Send Promotions to Customer</button>
          <DialogDefault open={openGift} handleOpen={setOpenGift}>
            <BirthDayGift  handleOpen={setOpenGift} setOpenInfo={setOpenInfo}/>
        </DialogDefault>
          <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
            <CustomizedBGift  handleOpen={setOpenOffer}/>
        </DialogDefault>
          <DialogDefault open={openPromotions} handleOpen={setOpenPromotions}>
            <AwardCustomer  handleOpen={setOpenPromotions}/>
        </DialogDefault>
    </div>
  )
}

export default MenuCard3
