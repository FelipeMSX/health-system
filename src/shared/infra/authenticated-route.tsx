import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "../../store/store";

interface AuthenticatedRouteProps {
  component: any;
  path: any;
  exact?: boolean;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isAuthenticated);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />)} />
  );
};

export default AuthenticatedRoute;
