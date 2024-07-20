import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useProfile = () => {
  const [profile, setProfile] = useState([])

  const getProfile = async (type = "All")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getProfile`)
    setProfile(data?.data)
  }


  useEffect(()=>{
    getProfile()
  },[])

  return {
    profile,
  };
};

export default useProfile;