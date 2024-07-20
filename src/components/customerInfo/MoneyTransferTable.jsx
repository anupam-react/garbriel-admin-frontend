import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";

const MoneyTransferTable = () => {
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Reward Amount</th>
            <th>Points Earned</th>
            <th>Reward Conversion Date</th>
            <th>Product(s) Claimed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>£15</p>
            </td>
            <td>
              <div>1500</div>
            </td>
            <td>30/11/2023</td>
            <td>
              <div className="table-flex">
                <img src="./Group 527.png" alt="" style={{ width: "100px" }} />
                <p>
                  <span
                    style={{ color: "#3BB54A", textDecoration: "underline" }}
                  >
                    Claimed
                  </span>{" "}
                  <br />
                  HoneyComb Mocha 09/12/2023,11:00 am{" "}
                  <span
                    className="id-link"
                    onClick={() => setOpenTransaction(true)}
                  >
                    {" "}
                    See transaction
                  </span>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>£15</p>
            </td>
            <td>
              <div>1500</div>
            </td>
            <td>30/11/2023</td>
            <td>
              <div className="table-flex">
                <img src="./Group 527.png" alt="" style={{ width: "100px" }} />
                <p>
                  <span
                    style={{ color: "#3BB54A", textDecoration: "underline" }}
                  >
                    Claimed
                  </span>{" "}
                  <br />
                  HoneyComb Mocha 09/12/2023,11:00 am{" "}
                  <span
                    className="id-link"
                    onClick={() => setOpenTransaction(true)}
                  >
                    {" "}
                    See transaction
                  </span>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
    </div>
  );
};

export default MoneyTransferTable;
