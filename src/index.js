import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import LandingPage from './LandingPage';
import TweetMap from './TweetMap';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LandingPage}/>
            <Route path="explore" component={TweetMap}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
