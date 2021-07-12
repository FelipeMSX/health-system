import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HealthAgent from './components/Pages/HealthAgent';
import HealthAgentInsert from './components/Pages/HealthAgent/Insert';
import Street from './components/Pages/Street';
import Home from './components/Pages/Homes';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/health-agent' component={HealthAgent}></Route>
            <Route path='/health-agent/create' component={HealthAgentInsert}></Route>
            <Route path='/street' component={Street}></Route>
            <Route></Route>
        </Switch>
    )
};

export default Routes;