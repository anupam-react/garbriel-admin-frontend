import React, { useState } from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import { Slider } from "@material-tailwind/react";
import AddProfile from "./AddProfile";
const ReceiptFilter = ({ closeDrawer, open }) => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        direction="right"
        className="bla bla bla"
        size={400}
      >
        <div className="filterContainer">
          <div className="filter-body no-scrollbar">
            <div className="mb-6 flex items-center justify-between">
              <div onClick={closeDrawer}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
              <h5 className="text-xl font-semibold">Filter</h5>
              <div onClick={closeDrawer}>
                <img
                  src="./close-outline 1.svg"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
            <div className="p-2">
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Date Range</p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="input-loyalty"
                >
                  <option className="font-semibold" value="custom">
                    CUSTOM
                  </option>
                </select>
              </div>
              <div className="calender">
                <div>
                  <p>From</p>
                  <DatePickerComp2 />
                </div>
                <div>
                  <p>To</p>
                  <DatePickerComp2 />
                </div>
              </div>
              <div className="mt-4 mb-[60px]">
                <p className="text-lg font-semibold pb-4">
                  Size Range{" "}
                  <span className="text-[#000000B2] text-[14px]">
                    {" "}
                    ( in Mb )
                  </span>
                </p>
                <div class="relative mb-6">
                  <label for="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  {/* <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
                  <Slider color="blue" defaultValue={50} />
                  <span className="text-sm text-[#000000] dark:text-gray-400 absolute start-0 -bottom-8">
                    0
                  </span>
                  <span className="text-sm text-[#000000] dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    5 Mb
                  </span>
                  <span className="text-sm text-[#000000] dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    10Mb
                  </span>
                  <span className="text-sm text-[#000000] dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    20Mb
                  </span>
                  <span className="text-sm text-[#000000] dark:text-gray-400 absolute end-0 -bottom-8">
                    +30Mb
                  </span>
                </div>
              </div>
              <p className="joint-date">Document Type</p>
              <div className="checkbox-container">
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .PDF
                    <input
                      type="checkbox"
                      // checked={isChecked}
                      // onChange={handleCheckboxChange}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .TXT
                    <input
                      type="checkbox"
                      // checked={isChecked}
                      // onChange={handleCheckboxChange}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .DOCX
                    <input
                      type="checkbox"
                      // checked={isChecked}
                      // onChange={handleCheckboxChange}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .RTF
                    <input
                      type="checkbox"
                      // checked={isChecked}
                      // onChange={handleCheckboxChange}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-lg font-semibold pb-4">Uploaded By</p>
                <div className="flex items-center px-6 h-12 input-loyalty">
                  <img
                    src="./image 2 (3).svg"
                    alt="search"
                    className="w-6 h-6"
                  />
                  <input type="text" className="search" placeholder="Search" />
                </div>
              </div>
              <div className="mt-4 relative">
                <div className="flex justify-between items-center px-6 h-12 input-loyalty">
                  <div className="flex gap-6">
                    <img
                      src="./Ellipse 11.png"
                      alt="search"
                      className="w-6 h-6"
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <img src="./image 675.png" alt="search" className="w-6 h-6" />
                </div>
              </div>
              <div
                className="mt-6 cursor-pointer flex justify-center items-center gap-3 rounded-lg py-2 border border-[#0070BC] text-[#0070BC]"
                onClick={() => setOpenProfile(!openProfile)}
              >
                <img src="./Mask group (10).png" alt="" className="w-7 h-7" />
                <p className="font-semibold text-lg">ADD</p>
              </div>

              {openProfile && <AddProfile />}
            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
              //   onClick={() => {
              //     setOpenAlert(true);
              //   }}
            >
              APPLY
            </button>
            <button
              className="button4"
              //   onClick={() => {
              //     setOpenAlert(true);
              //   }}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ReceiptFilter;
