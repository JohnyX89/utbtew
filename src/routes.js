import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import AddingPage from './pages/AddingPage/AddingPage';
import DetailPage from './pages/DetailPage/DetailPage';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/add' component={AddingPage} />
        <Route path='/meal/:id' component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
};