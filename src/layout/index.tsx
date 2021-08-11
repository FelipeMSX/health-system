import React, { useState } from 'react';

import AppLogo from './app-logo';
import SideBar from './side-bar';
import NavBar from './navigation-bar'
import ContentArea from './content-area'
import { Grid } from './styles';
import { AppContextProvider } from '../contexts/ApplicationContext';

const Layout: React.FC = () => {

    return (
        <AppContextProvider>
            <Grid>
                <SideBar/>
                <NavBar/>
                <ContentArea/>
            </Grid>
        </AppContextProvider>
    )
};

export default Layout;