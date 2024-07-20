import React, { useState } from "react";
import "./index.scss";
import InfoHeader from "./InfoHeader";
import { DialogDefault } from "../common/DilogBox";
import BirthDayGift from "./BirthDayGift";
const Demographic = ({ handleOpen }) => {
  const [openGift, setOpenGift] = useState(false);
  const [openCGift, setOpenCGift] = useState(false);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Customer Demographic</p>
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
        <p style={{ color: "#0070BC", fontWeight: 600 }}>CUSTOMER DEOGRAPHIC</p>
        <hr className="hr3" style={{ width: "205px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Customer</th>
            <th>ID</th>
            <th>Location</th>
            <th>DOB</th>
            <th>Occupation</th>
            <th>Gift/Offer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div style={{ color: "#121212B2" }}> ID : MC12345</div>
            </td>
            <td>
              <div style={{ color: "#0070BC", textDecoration: "underline" }}>
                {" "}
                ID : MC12345
              </div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>London, United Kingdom</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>12/02</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>Student</div>
            </td>
            <td className="flex justify-center items-center">
              <div className="buttonContainer2">
                <button
                  className="button3"
                  onClick={() => {
                    setOpenGift(true);
                  }}
                >
                  Send Birthday Gift
                </button>
                <button
                  className="button3"
                  onClick={() => {
                    setOpenCGift(true);
                  }}
                >
                  Send Birthday Customized Offer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openGift} handleOpen={setOpenGift}>
        <BirthDayGift handleOpen={setOpenGift} />
      </DialogDefault>
      <DialogDefault open={openCGift} handleOpen={setOpenCGift}>
        <BirthDayGift handleOpen={setOpenCGift} />
      </DialogDefault>
    </div>
  );
};

export default Demographic;
