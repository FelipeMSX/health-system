import React, { useState } from 'react';

import { Grid } from './styles';
import AppLogo from './AppLogo';
import SideBar from './SideBar';
import NavBar from './NavBar'
import ContentArea from './ContentArea'
import { AppContextProvider } from '../../contexts/ApplicationContext';

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