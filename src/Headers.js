import React from 'react';
import './css/LandingPage.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
import { Link } from 'react-router';

var Headers = React.createClass({
    render() {
        return(
            <div className="container">
             <MuiThemeProvider>
              <Card>
                <CardMedia
                  overlay={<CardTitle title={this.props.cardTitle} subtitle={this.props.cardSubtitle} />}
                >
                  <img id="headlinePicture" src={this.props.image} className="cover" />
                </CardMedia>
                <CardTitle className="center" title={this.props.Title} subtitle={this.props.Subtitle} />
                <CardText>
                  <p id="small-text">
                  {this.props.cardDescription}
                  <br/><br/>
                  <hr/>
                  </p>
                </CardText>
              </Card>
              </MuiThemeProvider>
              {this.props.children}
            </div>
        )
    }
});

export default Headers;
