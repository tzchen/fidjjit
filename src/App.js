// import React, { Component } from 'react';
// import logo from './logo.svg';
import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';

var App = React.createClass({

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Link className="link" activeClassName='active' to="/"><MuiThemeProvider><FlatButton label="Home" /></MuiThemeProvider></Link>
          <Link className="link" activeClassName='active' to="/explore"><MuiThemeProvider><FlatButton label="Explore" /></MuiThemeProvider></Link>
          <Link className="link" activeClassName='active' to="/topTweets"><MuiThemeProvider><FlatButton label="Top Tweets" /></MuiThemeProvider></Link>

        </div>
        <div className="children">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default App;
