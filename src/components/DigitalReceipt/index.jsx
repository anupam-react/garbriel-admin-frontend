import React, { useMemo, useState, useRef, useEffect } from "react";
import Pagination from "../common/Pagination";
import "./index.scss";
import ReceiptFilter from "./ReceiptFilter";
import MenuCard from "../customerInfo/MenuCard";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "../customerInfo/CustomeInfo";
import TransactionDetails from "../customerInfo/TransactionDetails";
const DigitalReceipt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setMenuOpen] = useState(-1);
  const [isMenuOpen, setOpenMenu] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isDownload, setDownload] = useState(false);
  const [isOpenTrans, setOpenTrans] = useState(false);
  const divRef = useRef(null);
  let PageSize = 5;
  const data = [
    {
      Product: "Donut",
      Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
       Type: "PDF",
      Size: "11 Mb",

    },
    {
      Product: "Donut",
     Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
      Type: "PDF",
      Size: "11 Mb",

    },
    {
      Product: "Donut",
     Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
      Type: "PDF",
      Size: "11 Mb",

    },
    {
      Product: "Donut",
     Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
      Type: "PDF",
      Size: "11 Mb",

    },
    {
      Product: "Donut",
     Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
      Type: "PDF",
      Size: "11 Mb",

    },
    {
      Product: "Donut",
     Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
      Type: "PDF",
      Size: "11 Mb",

    },
    {
      Product: "Donut",
     Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
      Type: "PDF",
      Size: "11 Mb",

    },
    {
      Product: "Donut",
     Transaction: {date:"12/02/2023", time:"(6:30 AM)"},
      Customer: {img:"", name:"Jhon Deo" ,id : "MC12345"},
      Type: "PDF",
      Size: "11 Mb",

    },

  ];
  const closeDrawer = () => setIsOpen(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setMenuOpen(-1);
      }
    };

    if (isOpenMenu !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div>
      <div className="flex gap-10 items-center mb-4">
        <p className="text-2xl font-bold">Digital Receipt</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-64 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
        <div className="flex">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>
      </div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date Uploaded</th>
              <th>Uploaded By</th>
              <th>Document Type</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="text-[#000000B2]">{item?.Product}</td>
                  <td>
                    {item?.Transaction?.date} <span className="text-[#0070BC] font-[500]">{item?.Transaction?.time}</span>
                  </td>
                  <td>
                  <div className="flex items-center justify-center gap-6 relative">
                        <div className="profile-image">
                          <img src="./carbon_user-avatar-filled.png" alt="" />
                          <img
                            src="./solar_menu-dots-bold (1).png"
                            alt=""
                            className="absolute top-1 right-1 cursor-pointer"
                            onClick={() => {
                              if(isMenuOpen === i)  setOpenMenu(-1)
                                else setOpenMenu(i)
                              }}
                          />
                        </div>
                        {isMenuOpen === i && (
                          <div className="absolute top-0 z-20 -right-[180px]">
                            <MenuCard />
                          </div>
                        )}
                        <p
                          className="cursor-pointer font-semibold text-left text-black"
                          onClick={() => setOpenInfo(true)}
                         
                        >
                          <p>Jhon Deo</p>
                          ID:MC12345
                        </p>
                        
                      </div>
                  </td>
                  <td>PDF</td>
                  <td>11 Mb</td>
                  <td>
                    <div className="action">
                      <img
                        src="./Mask group (9).png"
                        alt=""
                        onClick={() => setMenuOpen(i)}
                      />
                      {isOpenMenu === i && (
                        <div className="action-main shadow" ref={divRef}>
                          <div className="flex gap-6" onClick={()=>setOpenTrans(true)}>
                            <img src="./image 119.png" alt="" />
                            <p>View</p>
                          </div>
                          <div className="flex gap-6" onClick={()=> setDownload(true)}>
                            <img src="./image 674.png" alt="" />
                            <p>Download</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isOpen && <ReceiptFilter closeDrawer={closeDrawer} open={isOpen} />}
      <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo}>
        <CustomeInfo handleOpen={setOpenInfo} />
      </DialogDefault>
      <DialogDefault open={isDownload} handleOpen={setDownload}>
      <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
          Receipt Downloaded
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isOpenTrans} handleOpen={setOpenTrans}>
        <TransactionDetails handleOpen={setOpenTrans} />
      </DialogDefault>
    </div>
  );
};

export default DigitalReceipt;
