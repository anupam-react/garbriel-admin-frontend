import React, { useState } from "react";
import InfoHeader from "./InfoHeader";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import HistoryDetails from "./HistoryDetails";

const Engagement = ({ handleOpen }) => {
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Customer Engagement Metrics </p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader />
      <div className="engagement-card">
        <div className="other">
          <p style={{ color: "#000000B2", fontWeight: 600 }}>
            Purchase Frequency/Weekly
          </p>
          <div className="other-footer">
            <img src="./image 701.png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
              27
            </p>
          </div>
        </div>
        <div className="other">
          <p style={{ color: "#000000B2", fontWeight: 600 }}>
            Purchase Frequency/Monthly
          </p>
          <div className="other-footer">
            <img src="./image 701.png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
              36
            </p>
          </div>
        </div>
        <div className="other">
          <p style={{ color: "#000000B2", fontWeight: 600 }}>
            Average Time Spent
          </p>
          <div className="other-footer">
            <img src="./image 701 (2).png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
              36
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer" style={{ paddingTop: "30px", paddingBottom: "20px" }}  onClick={() => handleOpen(false)}>
        <p
          style={{
            color: "#0070BC",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Customer Engagement Metrics{" "}
        </p>
        <hr className="hr3" style={{ width: "300px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Visit Frequency (Online)</th>
            <th>Visit Frequency (Instore)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
              <div className="-mt-[150px]" style={{ color: "#121212B2" }}>
                <span
                  style={{ color: "#0070BC", textDecoration: "underline" }}
                  className="cursor-pointer"
                  onClick={() => setOpenTransaction(true)}
                >
                  4 visits
                </span>{" "}
                a month
                <br />
                Last visit : Today, 10:30 pm
              </div>
            </td>
            <td>
              <div style={{ color: "#121212B2" }}>
                <span
                  style={{ color: "#0070BC", textDecoration: "underline" }}
                  className="cursor-pointer"
                  onClick={() => setOpenTransaction(true)}
                >
                  4 visits
                </span>{" "}
                a month
                <br />
                Last visit : Today, 10:30 pm
              </div>
              <div
                style={{
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ color: "#121212B2" }}>
                  (1): Café Nero, Manchester Spinning Fields,
                  <br />
                  M4 2AJ –{" "}
                  <span
                    style={{ color: "#0070BC", textDecoration: "underline" }}
                    className="cursor-pointer"
                    onClick={() => setOpenTransaction(true)}
                  >
                    2 visits
                  </span>
                  .<br />
                  Last visit to a store: Today, 10:30
                </div>
                <div style={{ color: "#121212B2" }}>
                  (2): Café Nero, Manchester Spinning Fields,
                  <br />
                  M4 2AJ –{" "}
                  <span
                    style={{ color: "#0070BC", textDecoration: "underline" }}
                    className="cursor-pointer"
                    onClick={() => setOpenTransaction(true)}
                  >
                    2 visits
                  </span>
                  .<br />
                  Last visit to a store: Today, 10:30
                </div>
                <div style={{ color: "#121212B2" }}>
                  (3): Café Nero, Manchester Spinning Fields,
                  <br />
                  M4 2AJ –{" "}
                  <span
                    style={{ color: "#0070BC", textDecoration: "underline" }}
                    className="cursor-pointer"
                    onClick={() => setOpenTransaction(true)}
                  >
                    2 visits
                  </span>
                  .<br />
                  Last visit to a store: Today, 10:30
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <HistoryDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
    </div>
  );
};

export default Engagement;
