import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoute = () => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminPrivateRoute;
