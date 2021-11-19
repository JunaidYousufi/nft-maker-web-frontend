import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import PublicRoute from "./layout/PublicRoute";
import PrivateRoute from "./layout/PrivateRoute"
import { Provider } from "react-redux";
import store from "./store";
import SignUp from "./Pages/SignUp";
import CookieConsent from "react-cookie-consent";
import Verification from "./Components/SignUp/Verification";
import Dashboard from "./Pages/Dashboard";
import Notfound from "./Pages/NotFound";
import Transactions from "./Pages/Transactions";
import AllNft from "./Pages/AllNft";

function App() {
  return (
    <>
      {/* COOKIE CONSENT */}
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Provider store={store}>
      <ToastContainer />
      <Routes>
        
          <Route path='/' element={<PrivateRoute/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="transactions" element={<Transactions/>}/>
            <Route path="all-nft" element={<AllNft/>}/>
          </Route>

          <Route path='/signup' element={<PublicRoute/>}>
            <Route index element={<SignUp/>}/>
            <Route path="verification" element={<Verification />} />
          </Route>
          <Route path="*" element={<Notfound/>}/>
      </Routes>
      </Provider>
    </>
  );
}

export default App;
