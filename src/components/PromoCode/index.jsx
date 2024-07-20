import React, { useMemo, useState, useRef, useEffect } from "react";
import Pagination from "../common/Pagination";
import "./index.scss";
import PromoFilter from "./PromoFilter";
import CreatePromo from "./CreatePromo";
import MegaSale from "./MegaSale";
import { DialogDefault } from "../common/DilogBox";
import { DatePickerComp } from "../common/DatePickerComp";
const PromoCode = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setActive] = useState(-1);

  const [openReactive, setOpenReactive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDelete , setDelete] = useState(false)
  const [deleteSuccess , setSuccess] = useState(false)
  const [isEdit , setEdit] = useState(false)
  const [isDeactive , setDeactive] = useState(false)
  const [isReactive , setReactive] = useState(false)
  const handleOpen = () => setOpen(!open);
  const handleOpen2 = () => setEdit(!open);
  const handleReOpen = () => setOpenReactive(!open);

  let PageSize = 5;

  const promocodeData = [
    {
      id: "CODE500",
      title: "Mega Sale!",
      desc: " Get upto £500 Off on purchases over £1,000",
      date: "DD/MM/YYYY",
      validity: "3 Months",
      status: "ACTIVE",
    },
    {
      id: "CODE500",
      title: "Mega Sale!",
      desc: " Get upto £500 Off on purchases over £1,000",
      date: "DD/MM/YYYY",
      validity: "3 Months",
      status: "DEACTIVE",
    },
    {
      id: "CODE500",
      title: "Mega Sale!",
      desc: " Get upto £500 Off on purchases over £1,000",
      date: "DD/MM/YYYY",
      validity: "3 Months",
      status: "EXPIRED!",
    },
    {
      id: "CODE500",
      title: "Mega Sale!",
      desc: " Get upto £500 Off on purchases over £1,000",
      date: "DD/MM/YYYY",
      validity: "3 Months",
      status: "DEACTIVE",
    },
    {
      id: "CODE500",
      title: "Mega Sale!",
      desc: " Get upto £500 Off on purchases over £1,000",
      date: "DD/MM/YYYY",
      validity: "3 Months",
      status: "ACTIVE",
    },
    {
      id: "CODE500",
      title: "Mega Sale!",
      desc: " Get upto £500 Off on purchases over £1,000",
      date: "DD/MM/YYYY",
      validity: "3 Months",
      status: "EXPIRED!",
    },
  ];
  const closeDrawer = () => setIsOpen(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return promocodeData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl font-bold">Promo Code</p>
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
        <div
          className="inventory-button gap-2"
          style={{ width: "220px" }}
          onClick={() => setOpen(true)}
        >
          <img src="./Mask group (11).png" alt="" />
          <p>CREATE PROMO CODE</p>
        </div>
      </div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Promo Code ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date Created</th>
              <th>Validity</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, i) => {
              return (
                <tr>
                  <td>
                    <div className="flex gap-4 justify-center items-center">
                      <img src="./image 681.png" alt="" />
                      <p className="text-[#0070BC] font-[500]">{item?.id}</p>
                    </div>
                  </td>
                  <td className="font-semibold">{item?.title}</td>
                  <td>
                    <p className="text-[#000000B2]">{item?.desc}</p>
                  </td>
                  <td>
                    <p className="text-[#000000B2]"> {item?.date}</p>
                  </td>
                  <td>
                    <p className="text-[#000000B2]">{item?.validity}</p>
                  </td>
                  <td>
                    <p
                      className={
                        item?.status === "ACTIVE"
                          ? "text-[#3BB54A] font-semibold"
                          : item?.status === "DEACTIVE"
                          ? "text-[#E5354B] font-semibold"
                          : "text-[#1E1E1E99] font-semibold"
                      }
                    >
                      {item?.status}
                    </p>
                  </td>
                  <td>
                    <div className="action">
                      <img
                        src="./Mask group (9).png"
                        alt=""
                        onClick={() => {
                          if (isActive === i) setActive(-1);
                          else setActive(i);
                        }}
                      />
                      {isActive === i && (
                        <>
                          {item?.status === "ACTIVE" ? (
                            <div className="action-main">
                              <div className="flex items-center gap-6" onClick={()=> setDeactive(true)}>
                                <img src="./image 119 (2).png" alt="" />
                                <p>De-Activate</p>
                              </div>
                              <div className="flex items-center gap-6" onClick={()=>setEdit(true)}>
                                <img src="./image 119 (3).png" alt="" />
                                <p>Edit Details</p>
                              </div>
                              <div className="flex items-center gap-6"  onClick={()=> setDelete(true)}>
                                <img src="./image 118.png" alt="" />
                                <p>Delete Promo Code</p>
                              </div>
                            </div>
                          ) : item?.status === "DEACTIVE" ? (
                            <div className="action-main">
                              <div className="flex items-center gap-6" onClick={()=> setReactive(true)}>
                                <img src="././image 119 (1).png" alt="" />
                                <p>Re-Activate</p>
                              </div>

                              <div className="flex items-center gap-6"  onClick={()=> setDelete(true)}>
                                <img src="./image 118.png" alt="" />
                                <p>Delete Promo Code</p>
                              </div>
                            </div>
                          ) : (
                            <div className="action-main">
                              <div className="flex items-center gap-6" onClick={()=> setReactive(true)}>
                                <img src="././image 119 (1).png" alt="" />
                                <p>Re-Activate</p>
                              </div>

                              <div className="flex items-center gap-6" onClick={()=> setDelete(true)}>
                                <img src="./image 118.png" alt="" />
                                <p>Delete Promo Code</p>
                              </div>
                            </div>
                          )}
                        </>
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
        totalCount={promocodeData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isOpen && <PromoFilter closeDrawer={closeDrawer} open={isOpen} />}
      <CreatePromo open={open} setOpen={setOpen} handleOpen={handleOpen} />
      <CreatePromo open={isEdit} edit={true} setOpen={setEdit} handleOpen={handleOpen2} />
      <MegaSale
        open={openReactive}
        setOpen={setOpenReactive}
        handleOpen={handleReOpen}
      />
      <DialogDefault open={isDelete} handleOpen={setDelete}>
           <div className="alert">
          {/* <img src="../Vector (2).png" alt="" /> */}
          <p className="text-center text-[24px] font-bold">
          Do you want to delete this product ?
          </p>
          <div className='button-container3'>
            <button className='promoButton' onClick={()=>{setSuccess(true)}}>Yes</button>
            <button className='promoButton' onClick={()=>setDelete(false)}>No</button>
          </div>
        </div>
      </DialogDefault>
      <DialogDefault open={deleteSuccess} handleOpen={setSuccess}>
           <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
          Promo Code Deleted
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isDeactive} handleOpen={setDeactive}>
      <div className="alert">
          {/* <img src="../Vector (2).png" alt="" /> */}
          <p className="text-center text-[24px] font-bold">
          Do you want to De-Active this product ?
          </p>
          <div className='button-container3'>
            <button className='promoButton' onClick={()=>{{
              setDeactive(false)
              }}}>Yes</button>
            <button className='promoButton' onClick={()=>setDeactive(false)}>No</button>
          </div>
        </div>
      </DialogDefault>
      <DialogDefault open={isReactive} handleOpen={setReactive}>
        <div className="py-6 px-6 bg-[#F5F5F5] rounded-lg">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
            <img src="./image 681.png" alt="" className="w-[30px] h-[30px]"/>
              <p className="font-semibold text-black text-[20px]">
              Mega Sale!
              </p>
            
            </div>
            <div onClick={() => setReactive(false)}>
              <img
                src="./Mask group (2).png"
                alt=""
                className="w-8 cursor-pointer"
              />
            </div>
          </div>
          <hr className="bg-black w-full my-6" />
          <div className="flex justify-between">
          <div className="flex flex-col gap-2">
          <p className="text-[#0070BC] py-2">FROM</p>
            <DatePickerComp />
          </div>
          <div className="flex flex-col gap-2">
          <p className="text-[#0070BC] py-2">VALID TILL</p>
            <DatePickerComp />
          </div>

          </div>
          <div className="text-[#000000B2] py-4">VALIDITY : <span className="text-[black]">6 MONTHS</span></div>
          <div className="flex justify-around items-center mt-4">
            <button className="sign-button w-48" onClick={() => setReactive(false)}>RE-ACTIVATE</button>
            <div className="flex  items-center gap-2 cursor-pointer" onClick={() => setReactive(false)}>
              <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
              <p className="text-[24px] cancel underline">Cancel</p>
            </div>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default PromoCode;
