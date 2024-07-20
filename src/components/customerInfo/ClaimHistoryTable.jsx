import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";

const ClaimHistoryTable = () => {
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Points Claimed</th>
            <th>Claim Date</th>
            <th>Product(s) Claimed</th>
            <th>Reward Vouchers</th>
            <th>Voucher ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>1500 Pts</p>
            </td>
            <td>30/11/2023</td>
            <td>
              <div className="table-flex">
                <img src="./Group 527.png" alt="" style={{ width: "80px" }} />
                <p>
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
            <td>01</td>
            <td>VCID474</td>
          </tr>
          <tr>
            <td>
              <p>4000 Pts</p>
            </td>
            <td>30/11/2023</td>
            <td>
              <div className="table-flex">
                <img src="./Group 527.png" alt="" style={{ width: "80px" }} />
                <p>
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
            <td>01</td>
            <td>VCID474</td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
    </div>
  );
};

export default ClaimHistoryTable;
