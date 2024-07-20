import React, { useMemo, useState } from "react";
import Pagination from "../common/Pagination";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "../customerInfo/CustomeInfo";
import MenuCard from "../customerInfo/MenuCard";
import TransactionDetails from "../customerInfo/TransactionDetails";

const PurchaseTable1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isOpenTrans, setOpenTrans] = useState(false);
  let PageSize = 5;
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Purchased By</th>
              <th>Amount</th>
              <th>Ref. ID</th>
              <th>Date & Time</th>
              <th>Retailer & Item</th>
              <th>Product ID</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData?.map((item , i) => {
              return (
                <tr>
                   <td>
                      <div className="flex items-center justify-center gap-6">
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
                          <div className="menu-Main">
                            <MenuCard />
                          </div>
                        )}
                      </div>
                    </td>
                  <td className="font-semibold text-xl"> £500</td>
                  <td onClick={()=> setOpenTrans(true)} className="font-semibold text-[#0070BC] underline cursor-pointer">ABCD12345</td>

                  <td>
                    DD/MM/YYYY <span className="text-[#0070BC]">(6:30 AM)</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src="./Ellipse 11 (1).png"
                        alt=""
                        className="h-10 w-10"
                      />
                      <div>
                        <p className="font-semibold text-left">DUNKIN’</p>
                        <p className="text-[#000000B2]">Sweet Donuts</p>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-[#000000B2]">#ABCD12345</td>
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
       <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo}>
        <CustomeInfo handleOpen={setOpenInfo} />
      </DialogDefault>
       <DialogDefault open={isOpenTrans} handleOpen={setOpenTrans}>
        <TransactionDetails handleOpen={setOpenTrans} />
      </DialogDefault>
    </div>
  );
};

export default PurchaseTable1;
