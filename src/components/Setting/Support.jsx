import React from "react";
import { AccordionCustomIcon } from "./Accordian";
import "./index.scss";
const Support = () => {
  return (
    <div>
      <p className="font-semibold text-xl py-6">Support & Help Desk</p>
      <div className="flex items-center px-6 h-12 bg-[white] rounded-md">
        <img src="../image 2 (3).svg" alt="search" className="w-6 h-6" />
        <input type="text" className="search w-full" placeholder="Search" />
      </div>
      <div className="supportContainer">
        <p className="text-[#0070BC] text-lg font-semibold">
          FREQUENTLY ASKED QUESTIONS ( FAQ’S )
        </p>
        <div>
          <AccordionCustomIcon />
        </div>
        <img src="./Component 32.png" alt="" className="message-box" />
      </div>
    </div>
  );
};

export default Support;
