import React from "react";
import "./index.scss";
const SelectItem = () => {
  return (
    <div className="retailer-container">
      <div className="flex items-center px-6 h-12 input-loyalty">
        <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
        <input type="text" className="search w-[150px]" placeholder="Search" />
      </div>
      <div className="h-[200px] overflow-auto p-4 mt-6 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <p>Sweet Donuts</p>
            <p className="text-[#0070BC]">#ABCD12345</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-4 items-center">
            <p>Sweet Donuts</p>
            <p className="text-[#0070BC]">#ABCD12345</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 ">
          <div className="flex gap-4 items-center">
            <p>Sweet Donuts</p>
            <p className="text-[#0070BC]">#ABCD12345</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-4 items-center">
            <p>Sweet Donuts</p>
            <p className="text-[#0070BC]">#ABCD12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectItem;
