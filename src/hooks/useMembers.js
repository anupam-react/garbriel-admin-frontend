import { useEffect, useState } from "react";
import { deleteApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useMemeber = () => {
  const [members, setAllMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllMemberData = async () => {
    const memberData = await fetchApiData(
      "https://qjb70c28zd.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/member"
    );
    console.log(memberData);
    setAllMembers(memberData?.data);
  };

  const filteredData = members?.filter(
    (item) =>
      item?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?._id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hendleDelete = async (id) => {
    console.log(id);
    await deleteApiData(
      `https://qjb70c28zd.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/user/member/${id}`
    );
    successToast("Delete Memeber Successfully");
  };

  useEffect(() => {
    getAllMemberData();
  }, []);

  return {
    members,
    searchTerm,
    setSearchTerm,
    filteredData,
    hendleDelete,
  };
};

export default useMemeber;
