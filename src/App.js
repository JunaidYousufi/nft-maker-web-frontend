import { Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    <>
      <h1>NEAR - NFT</h1>
      {/* <Provider store={store}> */}
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>
      {/* </Provider> */}
    </>
  );
}

export default App;
