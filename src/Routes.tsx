import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Home } from 'styled-icons/boxicons-regular';
import HealthAgent from './pages/health-agent';
import HealthAgentInsert from './pages/health-agent/Insert';
import Street from './pages/street';


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