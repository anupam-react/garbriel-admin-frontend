import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../components/Toast";


const useDocument = () => {
  const [businessLicense, setBusinessLicense] = useState("");
  const [certificateOfInCorporation, setCertificateOfInCorporation] = useState("");
  const [ownerOperatorId, setOwnerOperatorId] = useState("");
  const [proofOfAddress, setProofOfAddress] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();


  const handleDocuments = async (event) => {
    event.preventDefault();
    let id = sessionStorage.getItem("userId");

    const formData = {
      businessLicense,
      certificateOfInCorporation,
      ownerOperatorId,
      proofOfAddress
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/addDocument/${id}`,
        formData,
      );
      successToast("Add Document Successfully");
    
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      errorToast(error);
      return error;
    }
  };

  return {
    businessLicense, setBusinessLicense,
    certificateOfInCorporation, setCertificateOfInCorporation,
    ownerOperatorId, setOwnerOperatorId,
    proofOfAddress, setProofOfAddress,
    isSuccess,
    handleDocuments,
  };
};

export default useDocument;
