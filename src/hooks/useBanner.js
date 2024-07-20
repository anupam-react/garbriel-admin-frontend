import React, { useEffect } from "react";
import { useState } from "react";
import {
  createApiData,
  deleteApiData,
  fetchApiData,
  updateApiData,
} from "../utiils";
import { useNavigate, useParams } from "react-router-dom";
import { successToast } from "../components/Toast";

const useBanner = () => {
  const [allBanners, setAllbannners] = useState([]);
  const [banner, setBanner] = useState({
    title: "",
    description: "",
    image: {},
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const getAllBannerData = async () => {
    const bannerData = await fetchApiData(
      "https://qjb70c28zd.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/banner"
    );
    console.log(bannerData);
    setAllbannners(bannerData?.data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBanner({
      ...banner,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    setBanner({
      ...banner,
      image: file,
    });
  };

  const loadSingleBanner = async () => {
    const data = await fetchApiData(
      `https://qjb70c28zd.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/banner/${id}`
    );
    setBanner(data?.data);
    console.log(data?.data);
  };

  const handleCreateNewBanner = async (event) => {
    event.preventDefault();
    console.log(banner);
    const formData = new FormData();
    formData.append("title", banner?.title);
    formData.append("description", banner?.description);
    formData.append("image", banner?.image);
    console.log(formData);
    const data = await createApiData(
      "https://qjb70c28zd.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/banner",
      formData
    );
    successToast("Banner Create Successfully");
    navigate("/banners");
    setBanner({
      title: "",
      description: "",
      image: {},
      isActive: false,
    });
    console.log(data);
  };

  const handleUpdateBanner = async () => {
    console.log(banner);
    const formData = new FormData();
    formData.append("title", banner?.title);
    formData.append("description", banner?.description);
    formData.append("image", banner?.image);
    console.log(formData);
    const data = await updateApiData(
      `https://qjb70c28zd.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/banner/${id}`,
      formData
    );
    console.log(data);
    successToast("Banner Update Successfully");
    navigate("/banners");
    setBanner({
      title: "",
      description: "",
      image: {},
      isActive: false,
    });
    // console.log(data);
  };

  const handleDeleteBanner = async (id) => {
    await deleteApiData(
      `https://qjb70c28zd.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/banner/${id}`
    );
    navigate("/banners");
    successToast("Delete Banner Successfully");
  };

  useEffect(() => {
    if (!id) return;
    loadSingleBanner();
  }, []);

  useEffect(() => {
    if (id) return;
    getAllBannerData();
  }, []);
  return {
    allBanners,
    banner,
    setBanner,
    handleChange,
    handleImageChange,
    handleCreateNewBanner,
    handleUpdateBanner,
    handleDeleteBanner,
  };
};

export default useBanner;
