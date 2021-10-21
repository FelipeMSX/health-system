import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/auth/login/_index";
import HealthAgent from "./pages/health-agent";
import HealthAgentInsert from "./pages/health-agent/Insert";
import Home from "./pages/homes";
import Street from "./pages/street";
import AuthenticatedRoute from "./shared/infra/authenticated-route";
import PageNotFound from "./shared/pages/errors/404/_index";

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/" component={Home} />
      <AuthenticatedRoute exact path="/health-agent" component={HealthAgent} />
      <AuthenticatedRoute path="/health-agent/create" component={HealthAgentInsert} />
      <AuthenticatedRoute path="/street" component={Street} />
      <Route path="/auth/login" component={Login} />
      <Route path="/404" component={PageNotFound} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
