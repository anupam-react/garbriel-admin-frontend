import React, { useState, useMemo, useEffect, useRef } from "react";

import Pagination from "../common/Pagination";
import MenuCard from "./MenuCard";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "./CustomeInfo";
import "./index.scss";

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isActive, setActive] = useState(-1);

  let PageSize = 3;
  const data = [
    {
      id: 1,
      first_name: "Jessamyn",
      last_name: "Espinazo",
      email: "jespinazo0@chicagotribune.com",
      phone: "162-166-0977",
    },
    {
      id: 2,
      first_name: "Isac",
      last_name: "Tooher",
      email: "itooher1@psu.edu",
      phone: "655-567-3619",
    },
    {
      id: 3,
      first_name: "Tabbatha",
      last_name: "Proschke",
      email: "tproschke2@weibo.com",
      phone: "327-612-4850",
    },
    {
      id: 4,
      first_name: "Ninetta",
      last_name: "Mabb",
      email: "nmabb3@canalblog.com",
      phone: "971-296-0911",
    },
    {
      id: 5,
      first_name: "Danni",
      last_name: "Wallentin",
      email: "dwallentin4@comcast.net",
      phone: "983-297-0506",
    },
  ];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const divRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setActive(-1);
      }
    };

    if (isActive !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <>
      <table className="table1">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date Joined</th>
           
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, i) => {
            return (
              <tr>
                <td className="">
                  <div className="flex items-center gap-6 ml-4 my-2">
                    <div className="profile-image">
                      <img src="./carbon_user-avatar-filled.png" alt="" />
                      <img
                        src="./solar_menu-dots-bold (1).png"
                        alt=""
                        className="absolute top-1 right-1 cursor-pointer"
                        onClick={() => setOpenMenu(!isOpenMenu)}
                      />
                    </div>
                    <div className="flex flex-col gap-1 font-[500]">
                    <p className="profileId" onClick={() => setOpenInfo(true)}>
                    Vijay Mahar
                    </p>
                    <p className="profileId" onClick={() => setOpenInfo(true)}>
                      ID:MC12345
                    </p>

                    </div>
                    {isOpenMenu && (
                      <div className="menu-Main">
                        <MenuCard />
                      </div>
                    )}
                  </div>
                </td>
                <td>DD/MM/YYYY</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
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
    </>
  );
};

export default PaginatedTable;
