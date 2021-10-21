import React, { useState } from "react";

import Header from "./sidebar/header";
import NavBar from "./navigation-bar/_index";
import ContentArea from "./content-area";
import { Grid } from "./grid-style";
import SideBar from "./sidebar/sidebar";
import { UseAppContext } from "../context/app-context";

const Layout: React.FC = () => {
  const { isFullcreen } = UseAppContext();

  return (
    <>
      {!isFullcreen && (
        <Grid>
          <SideBar />
          <NavBar />
          <ContentArea />
        </Grid>
      )}
      {isFullcreen && <ContentArea />}
    </>
  );
};

export default Layout;
