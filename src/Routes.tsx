import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/auth/login/_index";
import HealthAgent from "./pages/health-agent";
import HealthAgentInsert from "./pages/health-agent/Insert";
import Home from "./pages/homes";
import Street from "./pages/street";
import AuthenticatedRoute from "./shared/infra/authenticated-route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/" component={Home} />
      <AuthenticatedRoute exact path="/health-agent" component={HealthAgent} />
      <AuthenticatedRoute path="/health-agent/create" component={HealthAgentInsert} />
      <AuthenticatedRoute path="/street" component={Street} />
      <Route path="/auth/login" component={Login} />
    </Switch>
  );
};

export default Routes;
