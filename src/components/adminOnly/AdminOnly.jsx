import { Navigate, Outlet } from "react-router-dom";

const AdminOnly = ({ isAdmin, redirectPath = "/" }) => {
  if (!isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default AdminOnly;
