import React from 'react';
import './css/Tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Tweet component that renders tweet's information
var Tweet = React.createClass({
    render:function() {
        return (
          <div>
              <MuiThemeProvider>
              <Card className="tweetItem">
                <CardMedia
                  overlay={<CardTitle className="RT" title={this.props.RTcount} subtitle="ReTweets" />}
                >
                <img className="profilepic" src={this.props.profileImage} />
                </CardMedia>

                <CardText>
                  <p className="description">
                  <blockquote className="twitter-tweet" data-lang="en">
                    <p lang="en" dir="ltr">{this.props.tweetText}</p>&mdash; {this.props.name} (@{this.props.username}) <a href={this.props.link}>{this.props.created_at}</a>
                  </blockquote>

                  </p>
                </CardText>
              </Card>
              </MuiThemeProvider>
          </div>
      )}
});


export default Tweet;
