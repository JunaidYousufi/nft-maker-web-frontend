import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {useSelector} from "react-redux"
import detail__1 from "../Assets/Images/nft__detail__1.png"
import detail__2 from "../Assets/Images/nft__detail__2.png"
import styles from "./detailRoute.module.css"

const Layout = ({ children }) => {
    const nft__detail = useSelector((state) => state.nft__detail)
  return (
    <>
    <div className={styles.background}>
      <img src={detail__1} alt="Detail 1" className={styles.detail__1} />
      <img src={detail__2} alt="Detail 2" className={styles.detail__2} />

      {/* NFT Image */}
      <div className={styles.nft__image__wrapper}>
        <img src={nft__detail.image} alt="NFT" className={styles.nft__image} />
      </div>
      
        <main>{children}</main>
    </div>
    </>
  );
};
const LayoutRoute = () => {
  // let navigate = useNavigate()
  // let isAuth = Cookies.get(cookieAuth) || false // => 'value'
  let isAuth = true // => 'value'
  const nft__detail = useSelector((state) => state.nft__detail)

  return (
    <>
      <Layout>
        {isAuth ? <Outlet /> :  <Navigate replace to="/signup" />}
      </Layout>
    </>
  );
};
export default LayoutRoute;
