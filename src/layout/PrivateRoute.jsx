import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
import Menu from "../Components/Dashboard/Widgets/Menu";
import {useSelector} from "react-redux"
const Layout = ({ children }) => {
  const tooltip_show = useSelector((state)=> state.menu__tooltip) //Defined in reducer function
  return (
    <>
    <main style={{opacity:`${tooltip_show ? "0.5" : "1"}`,pointerEvents:`${tooltip_show ? "none" : "all"}`}}>{children}</main>
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
