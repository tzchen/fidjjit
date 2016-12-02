import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import LandingPage from './LandingPage';
import Map from './Map';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LandingPage}/>
            <Route path="explore" component={Map}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
