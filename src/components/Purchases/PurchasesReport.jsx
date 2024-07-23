import React from "react";
import "../Transaction.jsx/index.css";
import { DialogDefault } from "../common/DilogBox";
import Select from "../common/Select";
import { useNavigate } from "react-router-dom";

const PurchasesReport = ({ open, setOpen, handleOpen }) => {
  const navigate = useNavigate();
  const reportData = [
    { title: "Generate Report of In-app purchase receipt" },
    { title: "Generate Report of  In-Store purchase receipt" },
  ];
  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="">
          <div className="p-8 rounded-md text-black bg-[#F5F5F5] h-[70vh] overflow-auto no-scrollbar">
            <div className="flex justify-between">
              <p className="font-semibold text-black text-xl">
                Generate In-App Purchase Report
              </p>
              <div className="flex gap-4">
                <img
                  src="./Mask group (7).png"
                  alt=""
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => navigate("/setting/report")}
                />
                <div onClick={() => setOpen(false)}>
                  <img
                    src="./Mask group (2).png"
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <hr className="bg-[#00000099] w-full my-6" />
            <p className="font-[600] text-[16px]">
              Select the Sections which you want to include in the Report
            </p>
            <label className="containerLogin font-semibold text-[14px]">
              Match{" "}
              <span className="px-2 text-[#000000B2]">
                {" "}
                the Date Range in all{" "}
              </span>{" "}
              Selected Sections
              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span class="checkmark"></span>
            </label>
            <div className="flex flex-col gap-4 mb-4">
              {reportData?.map((data, i) => (
                <div className="flex items-start gap-6">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[#0070BC] dark:text-gray-300 uppercase">
                      {data?.title}
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-semibold pb-4">Export As :</p>
            <select
              id="countries"
              // value={selectedOption}
              // onChange={handleChange}
              className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="pdf" className="font-semibold">
                PDF
              </option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-10 my-8">
            <button className="sign-button w-48">EXPORT</button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
              <p className="text-sm cancel underline">Cancel</p>
            </div>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default PurchasesReport;
