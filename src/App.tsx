import React from "react";
import GlobalStyles from "./styles/global-styles";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/layout-index";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <GlobalStyles />
      </BrowserRouter>
    </div>
  );
}

export default App;
