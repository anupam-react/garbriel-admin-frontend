import {
    CircularProgressbar, buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Promotion = () => {
  return (
    <div>
      <p className="font-semibold text-xl pb-4">Recommended Promotion type</p>
          <div className="rounded-lg shadow-md flex flex-col justify-center items-center bg-white p-4 w-80">
              <p className="font-semibold gap-4">85% of your customers are likely to respond to</p>
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

export default Promotion
