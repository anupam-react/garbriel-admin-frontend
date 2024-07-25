import React, { useEffect, useRef } from "react";
import "./index.scss";
const SelectItem = ({onClose , show}) => {
  
  const popupRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
      <div ref={popupRef} className="bg-white p-4 rounded shadow-lg w-[300px]">
      <div className="flex items-center px-6 h-16 input-loyalty">
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
    </div>
  );
};

export default SelectItem;
