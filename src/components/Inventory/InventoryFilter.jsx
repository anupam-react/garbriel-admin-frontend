import React, { useState } from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import { Slider } from "@material-tailwind/react";
import InventoryProfile from "./InventoryProfile";
const InventoryFilter = ({ closeDrawer, open }) => {
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

              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Pricing</p>
                <div className="relative mb-8">
                  <label for="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  {/* <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
                  <Slider color="blue" defaultValue={50} />
                  <span className="text-sm text-black dark:text-gray-400 absolute start-0 -bottom-9">
                    £0
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    £500
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    £1,000
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    £5,000
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute end-0 -bottom-9">
                    £10,000
                  </span>
                </div>
              </div>
              <div className="mt-[60px]">
                <p className="text-lg font-semibold pb-4">Category</p>
                <div className="flex items-center px-6 h-12 input-loyalty">
                  <img
                    src="./image 2 (3).svg"
                    alt="search"
                    className="w-6 h-6"
                  />
                  <input type="text" className="search" placeholder="Search" />
                </div>
              </div>
              <div className="mt-4 relative flex gap-4 text-sm">
                <div className="flex gap-4 items-center pl-6 h-12 input-loyalty">
                  <p>Lorem Ipsum</p>
                  <img src="./image 675.png" alt="search" className="w-6 h-6" />
                </div>
                <div className="flex gap-4 items-center pl-6 h-12 input-loyalty">
                  <p>Lorem Ipsum</p>
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
              <div className="mt-8">
                <p className="text-lg font-semibold pb-4">Stock Availibiity</p>
                <div className="relative mb-8">
                  <label for="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  {/* <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
                  <Slider color="blue" defaultValue={50} />
                  <span className="text-sm text-black dark:text-gray-400 absolute start-0 -bottom-9">
                    0%
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    20%
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    50%
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    80%
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute end-0 -bottom-9">
                    100%
                  </span>
                </div>
              </div>

              {openProfile && <InventoryProfile />}
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
              onClick={closeDrawer}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default InventoryFilter;
