import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from './components/App';
import SearchPage from './components/SearchPage';
import BeerPage from './components/BeerPage';
import E404Page from './components/E404Page';

import './app.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/search" />
      <Route path="search" component={SearchPage} />
      <Route path="beer" component={BeerPage} />
      <Route path="*" component={E404Page} />
    </Route>
  </Router>
), document.getElementById('app'));
