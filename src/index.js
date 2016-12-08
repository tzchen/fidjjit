import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import LandingPage from './LandingPage';
import TweetMap from './TweetMap';
import TopTweets from './TopTweets';

 // Initialize Firebase
var config = {
	apiKey: "AIzaSyDT9jJgY7WsgfCYI5yIHu0Ww0W6YF4hQgA",
	authDomain: "fidjjit.firebaseapp.com",
	databaseURL: "https://fidjjit.firebaseio.com",
	storageBucket: "fidjjit.appspot.com",
	messagingSenderId: "50404078496"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LandingPage}/>
            <Route path="explore" component={TweetMap}/>
						<Route path="topTweets" component={TopTweets}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
