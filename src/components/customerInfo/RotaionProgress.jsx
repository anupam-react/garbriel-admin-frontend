import {
    CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.scss";
const RotaionProgress = () => {
  return (
    <div>
      <p className="font-semibold text-xl pb-4">Retention Rate</p>
      <div className="rounded-lg shadow-md flex justify-center items-center bg-white p-4 w-80">
      <CircularProgressbar
        value={60}
        text={`${60}%`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "#0096DB",
          trailColor: "gray"
        })}
      />
      </div>
    </div>
  );
};

export default RotaionProgress;
