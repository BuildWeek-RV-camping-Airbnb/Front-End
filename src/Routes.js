import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout, SignIn, SignUp } from './components';
import { Main as MainLayout } from './components/Dashboard';
import PrivateRoute from './PrivateRoute'
import Feed from './components/Feed/Feed'


import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
} from './components/Dashboard/Dashboard Items';



const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <Route
        component={SignIn}
        exact
        path='/signin'
      />
      <Route
        component={SignUp}
        exact
        path='/signup'
      />
      <PrivateRoute
        component={Feed}
        exact
        patch='/feed'
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
