import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
// import {Routes} from "react-router"
import PublicRoute from "./layout/PublicRoute"
import PrivateRoute from "./layout/PrivateRoute"
// import { Provider } from "react-redux";
// import store from "./store";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Notfound from "./Pages/NotFound";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <ToastContainer />
      <Routes>
          <Route path='/' element={<PrivateRoute/>}>
            <Route index element={<Dashboard/>}/>
          </Route>

          <Route path='/signup' element={<PublicRoute/>}>
            <Route index element={<SignUp/>}/>
          </Route>
          <Route path="*" element={<Notfound/>}/>
      </Routes>
      {/* </Provider> */}
    </>
  );
}

export default App;
