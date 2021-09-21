import React, { useState } from "react";

import Header from "./sidebar/header";
import NavBar from "./navigation-bar";
import ContentArea from "./content-area";
import { Grid } from "./grid-style";
import { AppContextProvider } from "../contexts/application-context";
import SideBar from "./sidebar/sidebar";

const Layout: React.FC = () => {
  return (
    <AppContextProvider>
      <Grid>
        <SideBar />
        <NavBar />
        <ContentArea />
      </Grid>
    </AppContextProvider>
  );
};

export default Layout;
