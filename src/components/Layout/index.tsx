import React from 'react';

import { Grid } from './styles';
import AppLogo from './AppLogo';
import AppLink from './AppLink';
import ActionBar from './ActionBar'
import ContentArea from './ContentArea'

const Layout: React.FC = () => {
    return (
        <Grid>
            <AppLogo/>
            <AppLink/>
            <ActionBar/>
            <ContentArea/>
        </Grid>
    )
};

export default Layout;