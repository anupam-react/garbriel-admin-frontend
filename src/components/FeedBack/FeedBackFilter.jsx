import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import { Slider } from "@material-tailwind/react";

const FeedBackFilter = ({ closeDrawer, open }) => {
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
          <div className="filter-body">
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
              {/* <p className="joint-date mt-[40px]">Feedback Type</p>
              <div className="checkbox-container">
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    UX Feedback
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
                    Transaction Experience
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
                    Loyalty & Rewards Program Feedback
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
                    Security & Privacy Feedback
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
                    Customer Support Experience
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
                    Feature Requests
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
                    Technical Issues
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
                    Comparative Feedback
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
                    Usability in Partnered Retailers
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
                    Educational Resources & Guidance
                    <input
                      type="checkbox"
                      // checked={isChecked}
                      // onChange={handleCheckboxChange}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <p className="joint-date mt-[40px]">Ratings</p>
              <div className="checkbox-container">
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    <div className="flex items-center gap-4">
                      <p>5 Stars</p>
                      <div className="flex gap-1">
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                      </div>
                    </div>
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
                    <div className="flex items-center gap-4">
                      <p>4 Stars</p>
                      <div className="flex gap-1">
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                      </div>
                    </div>
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
                    <div className="flex items-center gap-4">
                      <p>3 Stars</p>
                      <div className="flex gap-1">
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                      </div>
                    </div>
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
                    <div className="flex items-center gap-4">
                      <p>2 Stars</p>
                      <div className="flex gap-1">
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                      </div>
                    </div>
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
                    <div className="flex items-center gap-4">
                      <p>1 Stars</p>
                      <div className="flex gap-1">
                        <img src="./image 680.png" alt="" className="h-5 w-5" />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      // checked={isChecked}
                      // onChange={handleCheckboxChange}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div> */}
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

export default FeedBackFilter;
