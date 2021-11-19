import React from "react";
import user_icon from "../../../Assets/Images/user-icon.png";
import styles from "./Home.module.css";
const HomeHeader = () => {
  return (
    <>
      <div className={styles.home__header}>
        <div className={styles.user__icon}>
          <img src={user_icon} alt="User Name" />
          <h6>john.near</h6>
        </div>
      </div>
    </>
  );
};
export default HomeHeader;
