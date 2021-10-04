import React, { useState } from "react";

import Header from "./sidebar/header";
import NavBar from "./navigation-bar";
import ContentArea from "./content-area";
import { Grid } from "./grid-style";
import SideBar from "./sidebar/sidebar";
import Login from "../pages/auth/login/_index";

const Layout: React.FC = () => {
  return (
    <>
      {/* <Login /> */}
      <Grid>
        <SideBar />
        <NavBar />
        <ContentArea />
        {/* <Login /> */}
      </Grid>
    </>
  );
};

export default Layout;
