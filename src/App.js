import { Routes, Route } from "react-router-dom";
// import {Routes} from "react-router"
import PublicRoute from "./layout/PublicRoute"
// import { Provider } from "react-redux";
// import store from "./store";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Routes>
          <Route exact path='/signup' element={<PublicRoute/>}>
            <Route exact path='' element={<SignUp/>}/>
          </Route>
      </Routes>
      {/* </Provider> */}
    </>
  );
}

export default App;
