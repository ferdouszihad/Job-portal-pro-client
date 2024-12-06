import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";
import { Navigate, useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <Loading></Loading>;

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
