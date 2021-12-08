import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-multi-carousel/lib/styles.css';
import "./Assets/Styles/modal.css";
import "./Assets/Styles/filepond.css";
import "./Components/SignUp/Verification/verificationCode.css"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CookieConsent from "react-cookie-consent";
import { useSelector,useDispatch } from "react-redux";

//Routes
import DetailRoute from "./layout/DetailRoute";
import PublicRoute from "./layout/PublicRoute";
import PrivateRoute from "./layout/PrivateRoute";
import SettingsRoute from "./layout/SettingsRoute"
//Pages
import SignUp from "./Pages/SignUp";
import Verification from "./Components/SignUp/Verification";
import Dashboard from "./Pages/Dashboard";
import Notfound from "./Pages/NotFound";
import Transactions from "./Pages/Transactions";
import AllNft from "./Pages/AllNft";
import CreateAnAccount from "./Components/SignUp/CreateAnAccount/CreateAnAccount";
// import GiftAnNft from "./Components/GiftAnNft/GiftAnNft";
import NFTDetail from "./Pages/NftDetail";
import NFTClaim from "./Pages/NftClaim"
import GiftAnNftDialog from "./Components/GiftAnNftDialog/GiftAnNft";
import SignIn from "./Components/SignIn/SignIn";
import Settings from "./Components/Dashboard/Settings";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-TJSWG5R'
}
TagManager.initialize(tagManagerArgs)


function App() {
  let dispatch = useDispatch()
  let navigate = useNavigate();

  window.dataLayer.push({
    event: 'pageview'
  });
  
  const giftSent = () => {
    dispatch({ type: "createnft__open" })
    navigate("/");
  };
  const nft__detail = useSelector((state) => state.nft__detail); //Single Nft Data
  return (
    <>
      {/* COOKIE CONSENT */}
      <CookieConsent
        location="bottom"
        buttonText="Got it"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2F80ED", color: "white", fontFamily: "Inter" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>

      <ToastContainer />
      <Routes>

        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="all-nft" element={<AllNft />} />
        </Route>

        <Route path="/settings" element={<SettingsRoute />}>
          <Route index element={<Settings />} />
        </Route>

        <Route path="/signup" element={<PublicRoute />}>
          <Route index element={<SignUp />} />
          <Route path="verification" element={<Verification />} />
          <Route path="create-account" element={<CreateAnAccount />} />
          <Route path="create-account/:accId" element={<CreateAnAccount />} />
          <Route path="gift-nft" element={<GiftAnNftDialog closebutton={true} sendGiftButton={giftSent} />}/>
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route path="/nft" element={<DetailRoute />}>
          <Route
            path=":nftid"
            element={
              nft__detail.image ? <NFTDetail /> : <Navigate replace to="/" />
            }
          />
          <Route
            path="detail/claim"
            element={
              nft__detail.image ? <NFTClaim /> : <Navigate replace to="/" />
            }
          />
          {" "}
          {/* Checking if nft detail image exists if not the detail page will redirect */}
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
