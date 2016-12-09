import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import $ from 'jquery';

require('./css/map.css');
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/'

class TweetMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      search: ''
    }
    this.getTweets();
    setInterval(this.getTweets.bind(this), 15000);
  }

  getTweets() {
    var comp = this;
    // Get tweets
    $.get('http://52.8.18.242/tweets.php', function(data) {
      // split string up by new lines
      var arr = data.split(/\n/);
      arr = arr.map(function(elem) {
        // try parsing. will be undefined in arr if failed to parse
        try {
          return JSON.parse(elem);
        } catch(err) {
          // terrible error handling
        } 
      });
      console.log(comp.state.tweets.length);
      // set state
      if(comp.state.tweets.length > 500) {
        comp.setState({tweets: comp.state.tweets.slice(200).concat(arr)});
      } else {
        comp.setState({tweets: comp.state.tweets.concat(arr)});
      }
    });
  }

  setSearch(event) {
    var value = document.getElementById('mapSearch').value;
		this.setState({search:value});
  }

  // Filter down the data based on a search
	filterData(data, filter) {
		return data.filter(function(t) {
      if(t === undefined) {
        return false;
      }
      return JSON.stringify(t).includes(filter);
    });
	}

  render() {
    const position = [39.50, -98.35];
    var filtered = this.filterData(this.state.tweets, this.state.search);
    return (
      <div className="container">
        <MuiThemeProvider>
          <Card>
            <CardMedia overlay={<CardTitle title="" subtitle="" />}>
              <img id="headlinePicture" src="./img/TweetMapHeader.png" className="cover" />
            </CardMedia>
            <CardTitle className="center" title="Explore the Twitter World" subtitle="(or just your hometown)" />
            <CardText>
              <p id="small-text">
                This map will give you the most recent tweets along with their associated location. You can click on any marker
                form more information about what tweet was made there and you can use the search bar
                to show you where the most recent tweets are being made about a topic of interest.
              </p>
            </CardText>
            <CardActions className="buttons">
            </CardActions>
          </Card>
        </MuiThemeProvider>
        
        <form>
          <input id="mapSearch" type="text" placeholder="Search for tweet" onChange={this.setSearch.bind(this)}></input>
        </form>

        <Map center={position} zoom={4}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {
            // create markers when we have info to mark
            filtered.length !== 0 && filtered.map(function(d) {
              var markerpos = [0, 0];
              // if the element is undefined or does not define a place, we can't map it
              if(d === undefined || d.place === undefined) {
                return;
              }
              // Use the 'place' feature of a tweet to find location if geolocation isnt given
              if(d.coordinates == null || d.coordinates === undefined) {
                markerpos = d.place.bounding_box.coordinates[0][0];
              } 
              // geolocation for tweet is given. use that.
              else {
                markerpos = d.coordinates.coordinates;
              }
              // swap to put in lat, lng form
              markerpos = [markerpos[1], markerpos[0]];
              // create the marker
              return (
                <Marker position={markerpos} key={d.id + d.text}>
                  <Popup>
                    <span><b>{d.user.screen_name}</b><br/>{d.text}</span>
                  </Popup>
                </Marker>
              );
            }) 
          } 
        </Map>
        {this.props.children}
      </div>
    );
  }
}

export default TweetMap;
