import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
import styles from './PrivateRoute.module.css'

const Layout = ({ children }) => {
  return (
    <>
    <main>{children}</main>
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
