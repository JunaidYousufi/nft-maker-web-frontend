import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import Menu from "../Components/Dashboard/Widgets/Menu";
import {useSelector} from "react-redux"
import Cookies from 'js-cookie'
import {cookieAuth} from "../Utils/config"
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
    // let navigate = useNavigate()
    let isAuth = Cookies.get(cookieAuth) || false // => 'value'

  return (
    <>
      <Layout>
        {isAuth ? <Outlet /> : <Navigate replace to="/signup" />}
      </Layout>
    </>
  );
};
export default LayoutRoute;
