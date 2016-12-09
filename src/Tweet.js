import React from 'react';
import './css/Tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var t = "http://twitframe.com/show?url=";

 // TEST
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

// <div className="tweetItem">
//
// <div className="RT">
//     {this.props.RTcount} RTs
// </div>
//
// <img class="profilepic" src={this.props.profileImage} />
//
//   <blockquote className="twitter-tweet" data-lang="en">
//     <p lang="en" dir="ltr">{this.props.tweetText}</p>&mdash; {this.props.name} (@{this.props.username}) <a href={this.props.link}>{this.props.created_at}</a>
//   </blockquote>
//
// </div>
// </div>
// )}

// <div className="tweetItem">
//
// <h2> user: </h2>
// <p>{this.props.name} </p>
//
// <img src={this.props.profileImage} />
//
//
// <h2> date: </h2>
// <p>{this.props.created_at} </p>
//
//   <h2> tweet: </h2>
//   <p>{this.props.tweetText}</p>
//
//   <h2> RTs: </h2>
//   <p>{this.props.RTcount} </p>
//
//   <blockquote class="twitter-tweet" data-lang="en">
//     <p lang="en" dir="ltr">{this.props.tweetText}</p>&mdash; {this.props.name} (@{this.props.username}) <a href={this.props.link}>{this.props.created_at}</a>
//   </blockquote>
//
// </div>
