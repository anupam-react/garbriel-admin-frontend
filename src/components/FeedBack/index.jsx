import React, { useMemo, useState } from "react";
import Pagination from "../common/Pagination";
import FeedBackFilter from "./FeedBackFilter";
import CustomerFeedBack from "./CustomerFeedBack";
import MenuCard from "../customerInfo/MenuCard";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "../customerInfo/CustomeInfo";

const FeedBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  let PageSize = 3;
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const closeDrawer = () => setIsOpen(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">Customer Feedback</p>
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
              <th>Customer</th>
              <th>Date Added</th>
              <th>Feedback Type</th>
              <th>Ratings</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item , i) => {
              return (
                  <tr>
                    <td>
                      <div className="flex items-center justify-center gap-6 relative">
                        <div className="profile-image">
                          <img src="./carbon_user-avatar-filled.png" alt="" />
                          <img
                            src="./solar_menu-dots-bold (1).png"
                            alt=""
                            className="absolute top-1 right-1 cursor-pointer"
                            onClick={() => {
                              if(isOpenMenu === i)  setOpenMenu(-1)
                                else setOpenMenu(i)
                              }}
                          />
                        </div>
                        
                        <p
                          className="profileId font-semibold text-left text-[#000000B2]"
                          onClick={() => setOpenInfo(true)}
                         
                        >
                          <p>Jhon Deo</p>
                          ID:MC12345
                        </p>
                        {isOpenMenu === i && (
                          <div className="menu-Main3">
                            <MenuCard onClose={()=> setOpenMenu(false)} setOpenInfo={setOpenInfo}/>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <p className="text-[#000000B2] font-semibold">
                        DD/MM/YYYY
                      </p>
                    </td>
                    <td className="font-semibold">Technical Issue</td>
                    <td>
                      <div className="flex justify-center gap-3">
                        <p className="text-[#3BB54A] font-bold text-sm">4.5</p>
                        <img src="./Group 409.png" alt="" />
                      </div>
                    </td>

                    <td className="text-sm w-[300px] cursor-pointer"  onClick={() => setOpen(true)}>
                      <p className="font-bold pb-2 text-left">Lorem Ipsum Heading!</p>
                      <p className=" text-[#00000099] text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque efficitur eu magna et malesuada. Null.....
                        <span
                          className="text-[#0070BC] font-semibold "
                         
                        >
                          READ MORE
                        </span>
                      </p>
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
      {isOpen && <FeedBackFilter closeDrawer={closeDrawer} open={isOpen} />}
      <CustomerFeedBack open={open} setOpen={setOpen} handleOpen={handleOpen} />
      <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo}>
        <CustomeInfo handleOpen={setOpenInfo} />
      </DialogDefault>
    </div>
  );
};

export default FeedBack;
