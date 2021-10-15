import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { routes } from '@constants';
import { useShallowSelector } from '@hooks';
import { authSelectors } from '@store/auth/selectors';
import { AuthState } from '@store/auth/types';

export const PrivateRoute: FC<RouteProps> = ({
  location,
  component,
  render,
  path,
  exact,
  sensitive,
  strict,
  children,
}) => {
  const {
    isAuth,
  } = useShallowSelector<AuthState>(authSelectors.getAuth);

  if (!isAuth) return <Redirect to={{ pathname: routes.auth.root }} />;

  return (
    <Route
      location={location}
      component={component}
      path={path}
      exact={exact}
      sensitive={sensitive}
      strict={strict}
      render={render}
    >
      {children}
    </Route>
  );
};
