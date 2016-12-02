// import React, { Component } from 'react';
// import logo from './logo.svg';
import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'

var App = React.createClass({

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
          <Link className="link" activeClassName='active' to="/explore">Explore</Link>

        </div>
        <div className="children">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default App;
