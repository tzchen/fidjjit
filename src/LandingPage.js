import React from 'react';
import './css/LandingPage.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
import { Link } from 'react-router';

var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
             <MuiThemeProvider>
              <Card>

                <CardMedia
                  overlay={<CardTitle title="" subtitle="" />}
                >
                  <img id="headlinePicture" src="/img/mainHeader.png" className="cover" />
                </CardMedia>
                <CardTitle className="center" title="So What Exactly is Fidjjit?" subtitle="(pronounced fi-jit)" />
                <CardText>
                  <p id="small-text">
                  Fidjjit is a tool to help people visualize and understand information created by the popular social networking
                  site Twitter. Our goal is to help users discover new perceptions through manipulating existing tweet data
                  and displaying it in a unique and meaningful way.
                  <br/><br/>
                  <hr/>
                  </p>
                </CardText>
                <CardActions>
                  <Link className="link" activeClassName='active' to="/explore"><FlatButton label="Explore" icon={<ActionAndroid />} /></Link>
                  <Link className="link" activeClassName='active' to="/topTweets"><FlatButton label="Top Tweets" /></Link>


                  <FlatButton label="Action3" />
                </CardActions>
              </Card>
              </MuiThemeProvider>
            </div>
        )
    }
});

export default LandingPage;
