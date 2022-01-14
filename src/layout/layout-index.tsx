import React, { useState } from "react";

import NavBar from "./navigation-bar/_index";
import ContentArea from "./content-area";
import { Grid } from "./grid-style";
import SideBar from "./sidebar/sidebar";

const Layout: React.FC = () => {
  return (
    <>
      <Grid>
        <SideBar />
        <NavBar />
        <ContentArea />
      </Grid>
    </>
  );
};

export default Layout;
