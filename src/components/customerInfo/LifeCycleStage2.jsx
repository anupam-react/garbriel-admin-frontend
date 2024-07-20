import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'


const LifeCycleStage2 = () => {
    return (
       <div>
      <p className="font-semibold text-xl pb-4">Life Cycle Stage</p>
          <div className="rounded-lg shadow-md flex flex-col justify-center items-center bg-white p-4 w-[290px]">
        
       <CircularProgressbar
            value={80}
            text={`Active`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "#00B050",
          trailColor: "gray",
          width:"200px"
        })}
          />
          <p style={{fontWeight:600}}>Active 80%</p>
      </div>
    </div>
  )
}

export default LifeCycleStage2
