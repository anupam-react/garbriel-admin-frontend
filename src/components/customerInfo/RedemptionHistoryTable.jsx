import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";

const RedemptionHistoryTable = () => {
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Redeem Date</th>
            <th>Product(s) Claimed</th>
            <th>Reward Vouchers</th>
            <th>Voucher ID</th>
            <th>Outlet Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
            <td>Café Nero, Manchester Spinning Fields, M6 3AJ</td>
          </tr>
          <tr>
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
            <td>Café Nero, Manchester Spinning Fields, M6 3AJ</td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
    </div>
  );
};

export default RedemptionHistoryTable;
