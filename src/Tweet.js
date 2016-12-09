import React from 'react';
import './css/Tweet.css'




 // TEST
var Tweet = React.createClass({

    render:function() {
        return (
            <div className="tweetItem">


            <img src={this.props.profileImage} />


              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">{this.props.tweetText}</p>&mdash; {this.props.name} (@{this.props.username}) <a href={this.props.link}>{this.props.created_at}</a>
              </blockquote>

                <h2> RTs: </h2>
                <p>{this.props.RTcount} </p>

            </div>
        )}
});


export default Tweet;

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
