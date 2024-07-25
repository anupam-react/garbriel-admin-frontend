import React, { useState } from "react";
import TransactionCard from "../Transaction.jsx/TransactionCard";
import { LineChart2 } from "./LineChart2";
import Select from "../common/Select";
import { BarChart2 } from "./BarChart2";
import { LineChart3 } from "./LineChart3";
import ReportPage2 from "./ReportPage2";
import { useNavigate } from "react-router-dom";
import Loader from "../Login/Loader";


const SalesAnalytics = () => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [openCustom1, setOpenCustom1] = useState(false);
  const [openCustom2, setOpenCustom2] = useState(false);
  const [openCustom3, setOpenCustom3] = useState(false);
  const [openCustom4, setOpenCustom4] = useState(false);
  const [openCustom5, setOpenCustom5] = useState(false);
  const [openCustom6, setOpenCustom6] = useState(false);
  
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
  const handleChange5 = (event) => {
    setSelectedOption5(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom5(true);
    }else{
      

    }
  };
  const handleChange6 = (event) => {
    setSelectedOption6(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom6(true);
    }else{
    }
  };


  const handleLoader = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/transaction");
    }, 2000);
  };

  const transactionData = [
    {
      title: "TOTAL REVENUE",
      image: "./image 51 (2).png",
      amount: 5000,
      footerTitle: "INDIVIDUAL TRANSACTION PROCESSED",
      handleChange: handleChange4,
      selectedOption: selectedOption4,
      openCustom: openCustom4,
      setOpenCustom: setOpenCustom4,
    },
    {
      title: "TOTAL TRANSACTIONS",
      image: "./image 51 (3).png",
      amount: 5000,
      footerTitle: "INDIVIDUAL TRANSACTION PROCESSED",
      handleChange: handleChange5,
      selectedOption: selectedOption5,
      openCustom: openCustom5,
      setOpenCustom: setOpenCustom5,
    },
    {
      title: "AVERAGE TRANSACTION VALUE",
      image: "./image 52.png",
      amount: 5000,
      footerTitle: "SPENT PER TRANSACTION",
      handleChange: handleChange6,
      selectedOption: selectedOption6,
      openCustom: openCustom6,
      setOpenCustom: setOpenCustom6,

      
    },
  ];

  return (
    <>
   {!isLoading ? 
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Sales Analytics</p>
        <img
          src="./Mask group (6).svg"
          alt=""
          className="h-8 w-8 cursor-pointer"
          onClick={handleLoader}
        />
        {/* <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFF",
            width: "25rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-80 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search in Transaction Data"
          />
        </div> */}
        <div className="flex">
          <button className="export flex gap-2" onClick={() => setOpen(true)}>
            <img src="./Mask group (7).svg" alt="" className="w-5 h-5" />
            <p>REPORT</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between my-6">
        {transactionData?.map((data, i) => (
          <TransactionCard data={data} selectedOption={data?.selectedOption} handleChange={data?.handleChange} open={data?.openCustom} setOpen={data?.setOpenCustom}  />
        ))}
      </div>
      <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-3 py-4 px-6">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#0070BC] font-semibold text-xl ">
            SALES BY CATEGORY / DEPARTMENT
          </p>
          <Select selectedOption={selectedOption1}  handleChange={handleChange1} open={openCustom1} setOpen={setOpenCustom1} />
        </div>
        <div className="w-full">
          <LineChart2  />
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-3 py-4 px-6 my-6">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#0070BC] font-semibold text-xl ">
            SALES BY LOCATION <span className="text-[#000000B2]">( Total</span>{" "}
            <span className="text-[#000000] font-semibold">57 OUTLETS )</span>
          </p>
          <Select selectedOption={selectedOption2}  handleChange={handleChange2} open={openCustom2} setOpen={setOpenCustom2} />
        </div>
        <div className="w-full">
          <BarChart2 />
        </div>
      </div>
      <div className="w-[50vw]">
        <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-3 py-4 px-6 flex-1">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#0070BC] font-semibold text-xl ">
              SALES TREND OVER TIME
            </p>
            <Select selectedOption={selectedOption3}  handleChange={handleChange3} open={openCustom3} setOpen={setOpenCustom3}/>
          </div>
          <div className="w-full h-full">
            <LineChart3 />
          </div>
        </div>
        {/* <div className="h-full">
          <TransactionCard data={data2} />
        </div> */}
      </div>
      <ReportPage2 open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </div>
  :
  <Loader />
  }
    </>
  );
};

export default SalesAnalytics;
