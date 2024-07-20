import React, { useState } from "react";
import InfoHeader from "./InfoHeader";
import MenuCard3 from "./MenuCard3";
import HistoryDetails from "./HistoryDetails";
import { DialogDefault } from "../common/DilogBox";

const BookMark = ({ handleOpen }) => {
    const [openMenu , setOpenMenu ] = useState(false)
    const [openTransaction , setOpenTransaction ] = useState(false)
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Bookmark</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader />
      <div style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <p style={{ color: "#0070BC", fontWeight: 600 }}>BOOK MARKS</p>
        <hr className="hr3" style={{ width: "120px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Product</th>
            <th>Bookmark Date</th>
            <th>Visits</th>
            <th>Time Spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
                      <td>
                          <div className="bookmarkImage">
                              <img src="./image 713 (3).png" alt="" className="image1" />
                              <div className="bookmarkText">
                              <p>GIFT A COFFEE</p>
                              <p style={{fontSize:"14px"}}>Gift a coffee (UK Only) for £3.30 </p>
                                  
                              </div>
                              <img src="./charm_menu-meatball.png" alt="" className="dot-image" onClick={()=>setOpenMenu(!openMenu)}/>
                          </div>
                          {openMenu && <MenuCard3 />}
            </td>
            <td>10/12/2023</td>
            <td>
              {" "}
              <span
                className="id-link"
                onClick={() => setOpenTransaction(true)}
              >
                10 visits,
              </span>{" "}
              <br />
              Last Visit: Today, 10:30 pm
            </td>
            <td>40 sec</td>
          </tr>
          <tr>
                      <td>
                          <div className="bookmarkImage">
                              <img src="./image 713 (4).png" alt="" className="image1"/>
                              <div className="bookmarkText">
                              <p>GET DONUTS</p>
                              <p style={{fontSize:"14px"}}>Get 12 for the price of 7 donuts £120.8 </p>
                                  
                              </div>
                              <img src="./charm_menu-meatball.png" alt="" className="dot-image" onClick={()=>setOpenMenu(!openMenu)}/>
                          </div>
                            {/* {openMenu && <MenuCard3 />} */}
            </td>
            <td>10/12/2023</td>
            <td>
              {" "}
              <span
                className="id-link"
                onClick={() => setOpenTransaction(true)}
              >
                10 visits,
              </span>{" "}
              <br />
              Last Visit: Today, 10:30 pm
            </td>
            <td>40 sec</td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <HistoryDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
     
    </div>
  );
};

export default BookMark;
