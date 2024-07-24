// Layout.js
import React from "react";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";
import useProfile from "./hooks/useProfile";

const Layout2 = ({ children }) => {
  const {profile} = useProfile()
  return (
    <div className="">
      <Navbar data={profile}/>
        <div className="flex justify-center px-[100px] py-10 " style={{ backgroundColor: "#EEEEEE" }}>
          {children}
        </div>
    </div>
  );
};

export default Layout2;
