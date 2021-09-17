import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
