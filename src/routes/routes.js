import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteWrapper from './router';

import Main from '~/pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={Main} />
        {/* <RouteWrapper path="/forgot" component={Forgot} /> */}
        {/* <RouteWrapper path="/logged" isPrivate component={Logged} /> */}
      </Switch>
    </BrowserRouter>
  );
}
