import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/auth/login/_index";
import HealthAgent from "./pages/health-agent";
import HealthAgentInsert from "./pages/health-agent/Insert";
import Home from "./pages/homes";
import Street from "./pages/street";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/health-agent" component={HealthAgent} />
      <Route path="/health-agent/create" component={HealthAgentInsert} />
      <Route path="/street" component={Street} />
      <Route path="/auth/login" component={Login} />
    </Switch>
  );
};

export default Routes;
