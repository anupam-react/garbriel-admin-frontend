import React, { useState } from "react";
import "./index.scss";
import { GoogleMapPage } from "./GoogleMapPage";
import Searchbar from "./Searchbar";
const HeatMaps = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <div className="flex justify-between gap-10 relative">
        <p className="text-xl font-semibold w-[150px]">Heat Maps</p>

        {!showSearch ? (
          <div
            className="flex items-center px-6 bg-white w-[60vw] rounded-lg h-12 "
            onClick={() => setShowSearch(true)}
          >
            <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
            <input
              type="text"
              className="search  w-full"
              placeholder="Search Brand"
            />
          </div>
        ) : (
          <Searchbar setShowSearch={setShowSearch} />
        )}
      </div>
      <div className="flex justify-between items-center gap-6 my-6">
        <img src="./Ellipse 13.png" alt="" />
        <p className="font-bold text-[20px]">
          Total <span className="text-[#FD575B]">12</span> Outlets{" "}
          <span className="text-[#000000B2]">Outlets all over the India</span>
        </p>
        <div className="flex gap-4">
          <div className="relative">
            <select
              id="countries"
              //   value={selectedOption}
              //   onChange={handleChange}
              className="map-input"
              style={{ width: "240px" }}
            >
              <option className="font-semibold">COUNTRY</option>
            </select>
          </div>
          <div className="relative">
            <select
              id="countries"
              //   value={selectedOption}
              //   onChange={handleChange}
              className="map-input"
              style={{ width: "240px" }}
            >
              <option className="font-semibold">REGION</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <GoogleMapPage />
      </div>
    </div>
  );
};

export default HeatMaps;
