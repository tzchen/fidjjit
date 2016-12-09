import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Map, CircleMarker, Popup, TileLayer } from 'react-leaflet';
import $ from 'jquery';

require('./css/map.css');

class TweetMap extends Component {

  constructor(props) {
    super(props);
    var comp = this;
    $.get('http://52.8.18.242/tweets.php', function(data) {
      var arr = data.split(/\n/);
      arr.forEach(function(elem) {
        //console.log(elem);
        console.log(JSON.parse(elem).coordinates);
      });
    });
  }

  render() {

    const position = [39.50, -98.35];

    return (
      <div className="container">
        <MuiThemeProvider>
          <Card>
            <CardMedia overlay={<CardTitle title="" subtitle="" />}>
              <img id="headlinePicture" src="/img/TweetMapHeader.png" className="cover" />
            </CardMedia>
            <CardTitle className="center" title="Explore the Twitter World" subtitle="(or just your hometown)" />
            <CardText>
              <p id="small-text">
              Finding where tweets come from is easy! Just type in a keyword or hashtag and hover over the markers that pop up to learn more about each Tweet.
              </p>
            </CardText>
            <CardActions className="buttons">
            </CardActions>
          </Card>
        </MuiThemeProvider>

        <Map center={position} zoom={4}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {

          }
          <CircleMarker center={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </CircleMarker>
        </Map>
        {this.props.children}
      </div>
    );
  }
}

export default TweetMap;
