import React, { useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import InventoryMenu from './InventoryMenu';
const InventoryCard = ({ data }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate();
  return (
    <div className='relative'>
    <div className='card-container' >
          <div className='flex justify-between items-center'>
              <div className='activity'>
                  <p className='dots'></p>
                  <p className='text-[#121212] font-semibold'>Available Instore</p>
              </div>
              <img src="./solar_menu-dots-bold.png" alt="" className='h-fit cursor-pointer' onClick={()=>setOpenMenu(!openMenu) }/>
          </div>
          <div className='image cursor-pointer' onClick={()=> navigate('/inventory/product-details')}>
          <img src={data?.image} alt="" />
          </div>
          <p className='text'>{data?.price}</p>
      <p className='text'>{data?.name}</p>
      
      </div>
      {openMenu &&
        <div className='menus'>
          <InventoryMenu setOpenMenu={setOpenMenu} />
          </div>
      }
    </div>
  )
}

export default InventoryCard
