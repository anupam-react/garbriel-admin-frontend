import React from "react";
import { useNavigate } from "react-router-dom";

const LoyalityCard = () => {
  const navigate = useNavigate()
  return (
    <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-4 py-4 px-4 w-[20vw] h-fit">
      <p className="text-[#0070BC] font-semibold text-lg">
        TOTAL LOYALTY POINTS
      </p>
      <div className="flex gap-6">
        <div>
          <p className="text-[#1E1E1E99] font-semibold pb-2">EARNED</p>
          <p className="font-bold text-3xl">504</p>
        </div>
        <div>
          <p className="text-[#1E1E1E99] font-semibold pb-2">REDEEMED</p>
          <p className="font-bold text-3xl">504</p>
        </div>
      </div>
      <hr className="bg-[#00000080] w-full" />
      <p className="text-[#1E1E1E99] font-[500] cursor-pointer" onClick={()=> navigate('/customer')}>VIEW MORE</p>
    </div>
  );
};

export default LoyalityCard;
