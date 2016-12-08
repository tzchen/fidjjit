import React from 'react';
import './css/LandingPage.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
import Search from 'material-ui/svg-icons/action/search';
import Chat from 'material-ui/svg-icons/communication/forum';
import History from 'material-ui/svg-icons/action/history';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
             <MuiThemeProvider>
              <Card>

                <CardMedia overlay={<CardTitle title="" subtitle="" />}>
                  <img id="headlinePicture" src="/img/mainHeader.png" className="cover" />
                </CardMedia>
                <CardTitle className="center" title="So What Exactly is Fidjjit?" subtitle="(pronounced fi-jit)" />
                <CardText>
                  <p id="small-text">
                  Fidjjit is a tool to help people visualize and understand information created by the popular social networking
                  site Twitter. Our goal is to help users discover new perceptions through manipulating existing tweet data
                  and displaying it in a unique and meaningful way.
                  <br/><br/>
                  </p>
                  <hr/>
                </CardText>
                <CardActions className="buttons">
                  <Link className="link" activeClassName='active' to="/explore"> <RaisedButton className="button" label="Explore" icon={<Search />} /></Link>
                  <Link className="link" activeClassName='active' to="/topTweets"><RaisedButton className="button" label="Top Tweets" icon={<Chat />} /></Link>
                  <RaisedButton className="button" label="Search History" icon={<History />} />
                  <br/><br/>
                </CardActions>
              </Card>
              </MuiThemeProvider>
              {this.props.children}
            </div>
        )
    }
});

export default LandingPage;
