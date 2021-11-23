import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import 'react-multi-carousel/lib/styles.css';

import { Routes, Route,Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CookieConsent from "react-cookie-consent";
import { useSelector } from "react-redux";

//Routes
import DetailRoute from "./layout/DetailRoute"
import PublicRoute from "./layout/PublicRoute";
import PrivateRoute from "./layout/PrivateRoute";

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
import GiftAnNftDialog from "./Components/GiftAnNftDialog/GiftAnNft";

function App() {
  const something = () => {
    alert("Gift Nft Button clicked");
  };
  const nft__detail = useSelector((state) => state.nft__detail) //Single Nft Data
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

          <Route path="/signup" element={<PublicRoute />}>
            <Route index element={<SignUp />} />
            <Route path="verification" element={<Verification />} />
            <Route path="create-account" element={<CreateAnAccount />} />
            <Route
              path="gift-nft"
              element={
                <GiftAnNftDialog
                  closebutton={false}
                  sendGiftButton={something}
                />
              }
            />
          </Route>

          <Route path="/nft" element={<DetailRoute />}>
            <Route path=":nftid" element={nft__detail.image ? <NFTDetail /> : <Navigate replace to="/" />} /> {/* Checking if nft detail image exists if not the detail page will redirect */}
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      
    </>
  );
}

export default App;
