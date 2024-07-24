import { Navigate, Outlet } from "react-router-dom";
import Layout2 from "../Layout2";
const PrivateRoutes2 = () => {
  let auth = sessionStorage.getItem("token");
  return auth ? (
    <Layout2>
      <Outlet />
    </Layout2>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes2;
