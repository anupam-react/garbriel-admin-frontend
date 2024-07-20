import React from "react";
import "./index.scss";
const SelectRetailer = () => {
  return (
    <div className="retailer-container">
      <div className="flex items-center px-6 h-12 input-loyalty">
        <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
        <input type="text" className="search w-[150px]" placeholder="Search" />
      </div>
      <div className="h-[200px] overflow-auto p-4 mt-6 ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4 items-center">
            <img src="./Ellipse 11 (1).png" alt="" />
            <p>DUNKIN’</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-4 items-center">
            <img src="./Ellipse 11 (2).png" alt="" />
            <p>Starbucks</p>
          </div>
        </div>
        <div className="flex justify-between items-center  mt-6">
          <div className="flex gap-4 items-center">
            <img src="./Ellipse 11 (1).png" alt="" />
            <p>DUNKIN’</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-4 items-center">
            <img src="./Ellipse 11 (2).png" alt="" />
            <p>Starbucks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRetailer;
