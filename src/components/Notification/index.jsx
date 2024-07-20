import React from 'react'

const Notification = () => {
    const notificationData = [
        {
        image:"../unsplash_c_GmwfHBDzk.png",
        title:"Your meet has been booked successfully",
        desc:"With Jake on December 23, 2019 at 6:00 pm"
    },
        {
        image:"../unsplash_-uHVRvDr7pg (1).png",
        title:"Do you wanna attend ‘New Year Party’?",
        desc:"With Jake on December 23, 2019 at 6:00 pm"
    },
        {
        image:"../unsplash_-uHVRvDr7pg.png",
        title:"Do you wanna attend ‘New Year Party’?",
        desc:"With Jake on December 23, 2019 at 6:00 pm"
    },
        {
        image:"../unsplash_c_GmwfHBDzk.png",
        title:"Your meet has been booked successfully",
        desc:"With Jake on December 23, 2019 at 6:00 pm"
    },
        {
        image:"../unsplash_-uHVRvDr7pg.png",
        title:"Do you wanna attend ‘New Year Party’?",
        desc:"With Jake on December 23, 2019 at 6:00 pm"
    },
        {
        image:"../unsplash_c_GmwfHBDzk.png",
        title:"Your meet has been booked successfully",
        desc:"With Jake on December 23, 2019 at 6:00 pm"
    },
]
  return (
    <div>
        <p className='text-[28px] font-[500] pb-6'>Notifications</p>
        <div className='bg-white rounded-[10px] py-4 px-6 h-[80vh] overflow-y-scroll no-scrollbar'>
            {notificationData?.map((d, i)=>(
            <div key={i}>
            <div className='flex items-center gap-8'>
                <img src={d?.image} alt="" className='w-[75px] h-[75px] rounded-full'/>
                <div>
                    <p className='text-[22px] text-[#0070BC] font-semibold'>{d?.title}</p>
                    <p className='text-[#00000080] font-[500] text-[18px]'>{d?.desc}</p>
                </div>
            </div>
            <hr className='bg-[#A2A2A2] my-4' />

            </div>

            ))}
        </div>
    </div>
  )
}

export default Notification