import React, { FC } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { PrivateRoute } from '@containers';
import { Auth, Create, Links, Details, Registration } from '@pages';
import { routes } from '@constants';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path={routes.auth.root} component={Auth} />
      <Route path={routes.registration.root} component={Registration} />
      <PrivateRoute path={routes.create.root} component={Create} />
      <PrivateRoute path={routes.links.root} component={Links} />
      <PrivateRoute path={routes.details.root} component={Details} />
      <Redirect to={{ pathname: routes.create.root }} />
    </Switch>
  );
};
