import React, { useState } from "react";

import Header from "./sidebar/header";
import NavBar from "./navigation-bar";
import ContentArea from "./content-area";
import { Grid } from "./grid-style";
import SideBar from "./sidebar/sidebar";
import Login from "../pages/auth/login";

const Layout: React.FC = () => {
  return (
    <>
      <Login />
      {/* <Grid>
        <SideBar />
        <NavBar />
        <ContentArea />
      </Grid> */}
    </>
  );
};

export default Layout;
