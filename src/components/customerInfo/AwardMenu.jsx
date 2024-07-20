import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import AwardStamp from "./AwardStamp";
import TargetPoints from "./TargetPoints";

const AwardMenu = () => {
  const [openGift, setOpenGift] = useState(false);
  const [openOffer, setOpenOffer] = useState(false);
  return (
    <div className="award-menu">
      <button className="menuButton3" onClick={() => setOpenGift(true)}>
        Award Stamp
      </button>
      <button className="menuButton3" onClick={() => setOpenOffer(true)}>
        Send Target Point Promotions
      </button>
      <DialogDefault open={openGift} handleOpen={setOpenGift}>
        <AwardStamp handleOpen={setOpenGift} />
      </DialogDefault>
      <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
        <TargetPoints handleOpen={setOpenOffer} />
      </DialogDefault>
    </div>
  );
};

export default AwardMenu;
