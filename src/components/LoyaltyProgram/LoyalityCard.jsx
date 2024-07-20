import React from 'react'

const LoyalityCard = ({image , text}) => {
  return (
    <div>
          <img src={image} alt="" />
          <p className='text-[#646464] font-semibold'>{text}</p>
    </div>
  )
}

export default LoyalityCard
