import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();

  return <Outlet />;
};

export default Auth;
