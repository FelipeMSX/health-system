import React, { useState } from 'react';

import { Grid } from './styles';
import AppLogo from './AppLogo';
import SideBar from './SideBar';
import NavBar from './NavBar'
import ContentArea from './ContentArea'

export interface Props {
    isOpened?: boolean
}


const SideBarExpandedContext = React.createContext(true);

const Layout: React.FC = () => {
    const [sideBarVisible, showSideBar] = useState(true);

    return (
        <Grid>
            <SideBar isOpened={sideBarVisible}/>
            <NavBar isOpened={sideBarVisible}/>
            <ContentArea/>
        </Grid>
    )
};

export default Layout;