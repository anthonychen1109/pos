import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../containers/menu';
import App from './app';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/menu' component={Menu} />
      <Route exact path='/' component={App} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
