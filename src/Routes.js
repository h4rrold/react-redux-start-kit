import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import { requireAuth } from "hoc";
import appRoutes from "config/routes";
import { NotFoundPage } from "pages";

const AppRoute = ({ isProtected, component, ...rest }) => {
  return (
    <Route
      component={isProtected ? requireAuth(component) : component}
      {...rest}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      {!!appRoutes.length &&
        appRoutes.map((routeProps) => (
          <AppRoute
            isProtected={routeProps.isProtected}
            key={routeProps.name}
            component={routeProps.component}
            {...routeProps}
          />
        ))}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
