import React from "react";
import "../Transaction.jsx/index.css";
import { DialogDefault } from "../common/DilogBox";
import { DatePickerComp } from "../common/DatePickerComp";

const CreatePromo = ({ open, setOpen, handleOpen, edit=false }) => {
  const reportData = [
    { title: "Sales Report over time" },
    { title: "ROAS vs Campaign Performance Report" },
    { title: "Product Performance Comparison Report" },
  ];

  const discountOptions = [
    { label: "Buy One Get One Free", value: "Buy One Get One Free" },
    { label: "Flat Amount Discount", value: "Flat Amount Discount" },
    { label: "Percentage Off", value: "Percentage Off" },
  ];
  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="">
          <div className="p-8 rounded-md text-black bg-[#F5F5F5] h-[70vh] overflow-auto">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img src="./image 681.png" alt="" />
                <p className="font-semibold text-black text-lg">
               { edit ? "Edit Promo Code" :  "Create Promo Code"}
                </p>
              </div>

              <div onClick={() => setOpen(false)}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-7 h-7 cursor-pointer"
                />
              </div>
            </div>
            <hr className="bg-[#00000099] w-full my-6" />
            <div>
              <p className="font-semibold pb-4">Details</p>
              <div className="mb-4">
                <p className="text-[#0070BC] pb-2">TITLE</p>
                <input
                  value="Enter Lorem Ipsum"
                  className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <p className="text-[#0070BC] pb-2">PROMO-CODE ID</p>
                <input
                  value="Enter Lorem Ipsum"
                  className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <p className="text-[#0070BC] pb-2">DESCRIPTION</p>
                <textarea
                  className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Type Here......"
                  name=""
                  id=""
                  rows="5"
                ></textarea>
              </div>
              <div>
                <p className="text-[#0070BC] pb-2">DISCOUNT TYPE</p>
                <p className="text-[#000000B2] text-sm pb-4 font-semibold">
                  Select Discount Type of your Promo Code
                </p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="pdf" disabled className="font-semibold mb-2">
                    Select Discount Type
                  </option>
                  {discountOptions?.map((data, i) => (
                    <>
                      <option
                        className="font-semibold text-black mb-2"
                        key={i}
                        value={data?.value}
                      >
                        {data?.label}
                      </option>
                    </>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-semibold pb-4">Validity</p>
              <div className="calender">
                <div>
                  <p className="text-[#0070BC]">FROM</p>
                  <DatePickerComp />
                </div>
                <div>
                  <p className="text-[#0070BC]">TO</p>
                  <DatePickerComp />
                </div>
              </div>
              <p className="font-semibold text-sm">
                <span className="text-[#000000B2] ">DURATION</span> : 6 MONTHS
              </p>
            </div>
            <div className="mt-6">
              <p className="font-semibold pb-3">Promo-Code Limit</p>
              <p className="text-[#000000B2] pb-3 text-sm font-semibold">
                Set limit on how many times this Promo-Code can be used by a
                User
              </p>
              <select
                id="countries"
                // value={selectedOption}
                // onChange={handleChange}
                className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="pdf" className="font-semibold">
                  Select Discount Type
                </option>
              </select>
            </div>
            <div className="mt-6">
              <p className="font-semibold pb-3">Distribution</p>
              <p className="text-[#000000B2] pb-3 text-sm font-semibold">
                Select all the <span className=" text-black">Groups</span> to
                which you want to Distribute this Promo Code
              </p>
              <div
                className="flex items-center px-6 h-12 w-full"
                style={{
                  backgroundColor: "#FFFF",
                  borderRadius: "12px",
                  color: "#8BA3CB",
                }}
              >
                <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
                <input
                  type="text"
                  className="border-none w-full bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="my-4 flex gap-4">
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
            <div className="mt-6 cursor-pointer flex justify-center items-center gap-3 rounded-lg py-2 border border-[#0070BC] text-[#0070BC]">
              <img src="./Mask group (10).png" alt="" className="w-7 h-7" />
              <p className="font-semibold text-lg">ADD</p>
            </div>
            <p className="py-4 text-[#000000B2] text-sm font-semibold">
              Select the{" "}
              <span className=" text-black">Distribution methods </span>
              by which you want to distribute the Promo code to your Selected
              Groups
            </p>
            <div className="flex gap-4">
              <div className="checkbox-filter" style={{ width: "240px" }}>
                <label className="checkbox1 text1 ">
                  Email
                  <input
                    type="checkbox"
                    // checked={isChecked}
                    // onChange={handleCheckboxChange}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="checkbox-filter" style={{ width: "240px" }}>
                <label className="checkbox1 text1 ">
                  SMS
                  <input
                    type="checkbox"
                    // checked={isChecked}
                    // onChange={handleCheckboxChange}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div
              className="checkbox-filter"
              style={{ width: "240px", marginTop: "20px" }}
            >
              <label className="checkbox1 text1 ">
                In-App Notifications
                <input
                  type="checkbox"
                  // checked={isChecked}
                  // onChange={handleCheckboxChange}
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 my-8">
            <button className="sign-button w-48" onClick={() => setOpen(false)}>
            { edit ? "UPDATE" :  "CREATE"}
              
            </button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
              <p className="text-[24px] cancel underline">Cancel</p>
            </div>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CreatePromo;
