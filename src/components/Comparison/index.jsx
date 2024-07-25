import React, { useState } from "react";
import Select from "../common/Select";
import Select2 from "../common/Select2";
import { DatePickerComp } from "../common/DatePickerComp";
import { BarChart3 } from "./BarChart3";
import { LineChart4 } from "./LineChart4";
import { BarChart4 } from "./BarChart4";
import ReportPage3 from "./ReportPage3";
import Select3 from "../common/Select3";


const Comparison = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");

  const [openCustom1, setOpenCustom1] = useState(false);
  const [openCustom2, setOpenCustom2] = useState(false);
  const [openCustom3, setOpenCustom3] = useState(false);
  const [openCustom4, setOpenCustom4] = useState(false);

  
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom1(true);
    }else{
      
    }
  };
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom2(true);
    }else{
     

    }
  };
  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom3(true);
    }else{
     

    }
  };
  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom4(true);
    }else{
     

    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Comparison</p>
        <div className="flex">
          <button className="export flex gap-2" onClick={() => setOpen(true)}>
            <img src="./Mask group (7).svg" alt="" className="w-5 h-5" />
            <p>REPORT</p>
          </button>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-white my-6 p-6 ">
        <p className="text-[#0070BC] font-semibold">DATE RANGE</p>
        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-[#000000B2] pb-2">Select Range</p>
          <Select3 selectedOption={selectedOption1} handleChange={handleChange1} open={openCustom1} setOpen={setOpenCustom1}/>
          </div>
          <div>
            <p className="text-[#000000B2] pb-2">From</p>

            <DatePickerComp />
          </div>
          <div>
            <p className="text-[#000000B2] pb-2">To</p>
            <DatePickerComp />
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-3 py-4 px-10">
        <div className="flex justify-between items-center w-full">
          <Select selectedOption={selectedOption2} handleChange={handleChange2} open={openCustom2} setOpen={setOpenCustom2}/>
        </div>
        <p className="text-[#0070BC] font-semibold text-xl uppercase">
        Sales Comparisons 
        </p>
        <div className="w-[600px]">
          <BarChart3 />
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-3 py-4 px-6 my-6">
        <div className="flex justify-between items-center w-full">
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="rounded shadow-md bg-[#EEEEEE80] text-[#000000B2] font-semibold text-sm  border-none block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option className="font-semibold">ALL</option>
            <option className="font-semibold">CREATE AN OFFER</option>
            <option className="font-semibold">PERCENTAGE DISCOUNT</option>
            <option className="font-semibold" selected>COUPONS</option>
            <option className="font-semibold">BUY 1 GET 1 FREE</option>
          </select>
          <div className="flex gap-4">
            <p className="text-[#000000B2]">From :</p>
          <DatePickerComp />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
        <Select2 selectedOption={selectedOption3} handleChange={handleChange3} open={openCustom3} setOpen={setOpenCustom3}/>
          <div className="flex gap-4">
            <p className="text-[#000000B2]">To :</p>
          <DatePickerComp />
          </div>
        </div>
        <p className="text-[#0070BC] text-[18px] font-semibold">ROAS VS CAMPAIGN TYPE</p>
        <div className="w-full">
          <LineChart4 />
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-3 py-4 px-6">
        <div className="flex justify-between items-center w-full">
        <Select2 selectedOption={selectedOption4} handleChange={handleChange4} open={openCustom4} setOpen={setOpenCustom4}/>
         
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="rounded shadow-md bg-[#EEEEEE80] text-[#000000B2] font-semibold text-sm  border-none block w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option className="font-semibold">Breverages</option>
          </select>
        </div>
        <p className="text-[#0070BC] text-[18px] font-semibold">Total Sales VS Product SubCategories</p>
        <div className="w-full">
          <BarChart4 />
        </div>
      </div>

      <ReportPage3 open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </div>
  );
};

export default Comparison;
