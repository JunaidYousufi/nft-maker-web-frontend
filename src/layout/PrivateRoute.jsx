import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
import Menu from "../Components/Dashboard/Widgets/Menu";

const Layout = ({ children }) => {
  return (
    <>
    <main>{children}</main>
    <Menu/>
    </>
  );
};
const LayoutRoute = () => {
    let navigate = useNavigate()
    let isAuth = true;
  return (
    <>
      <Layout>
        {isAuth ? <Outlet /> : navigate("/signup")}
      </Layout>
    </>
  );
};
export default LayoutRoute;
