import { Routes, Route } from "react-router-dom";
import PublicRoute from "./layout/PublicRoute";
import { Provider } from "react-redux";
import store from "./store";
import SignUp from "./Pages/SignUp";
import CookieConsent from "react-cookie-consent";
import Verification from "./Components/SignUp/Verification";

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
        <Routes>
          <Route path="signup" element={<PublicRoute />}>
            <Route index element={<SignUp />} />
            <Route path="verification" element={<Verification />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
