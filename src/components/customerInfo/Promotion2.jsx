import {
    CircularProgressbar, buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Promotion2 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p className="font-semibold text-xl pb-4">Recommended Promotion type</p>
          <div onClick={()=> navigate('/marketing/review-campaign-cupon')} className="cursor-pointer rounded-lg shadow-md flex flex-col justify-center items-center bg-white p-4 w-80">
        
       <CircularProgressbar
        value={70}
        text={`Coupons`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "#00B050",
          trailColor: "gray",
          width:"200px"
        })}
      />
      </div>
    </div>
  )
}

export default Promotion2
