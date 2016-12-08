import React, { Component } from 'react';
//import $ from 'jquery';
require('./css/bubble.css');

var MapBubble = require('react-d3-map-bubble').MapBubble;
var topojson = require('topojson');
var us = require('./data/us.json');

class TweetMap extends Component {

  render() {

    var width = 960;
    var height = 600;

    // data should be a MultiLineString
    var dataStates = topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; });
    /// data should be polygon
    var dataCounties = topojson.feature(us, us.objects.nation);

    // class
    var meshClass = 'border';
    var polygonClass = 'land';

    // domain
    var domain = {
      scale: 'sqrt',
      domain: [0, 1e6],
      range: [0, 15]
    };

    var circles = topojson.feature(us, us.objects.counties).features
      .sort(function(a, b) { return b.properties.population - a.properties.population; });

    console.log(circles);
    var circleValue = function(d) { return +d.properties.population; };
    var projection = 'null';

    var tooltipContent = function(d) {return d.properties;}

    return (
      <div>
        <MapBubble
          width={width}
          height={height}
          dataPolygon={dataCounties}
          polygonClass={polygonClass}
          dataMesh={dataStates}
          meshClass={meshClass}
          domain={domain}
          dataCircle={circles}
          circleValue={circleValue}
          circleClass={'bubble'}
          projection={projection}
          tooltipContent={tooltipContent}
          showGraticule={false}
          showTooltip={true}
          showLegend={true}
        />
        {this.props.children}
      </div>

    );
  }
}

export default TweetMap;
