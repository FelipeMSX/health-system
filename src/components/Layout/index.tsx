import React from 'react';

import { Grid } from './styles';
import AppLogo from './AppLogo';
import SideBar from './SideBar';
import NavBar from './NavBar'
import ContentArea from './ContentArea'

const Layout: React.FC = () => {
    return (
        <Grid>
            <AppLogo/>
            <SideBar/>
            <NavBar/>
            <ContentArea/>
        </Grid>
    )
};

export default Layout;