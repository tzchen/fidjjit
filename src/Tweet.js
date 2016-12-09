import React from 'react';
import './css/Tweet.css'




 // TEST
var Tweet = React.createClass({
    render:function() {
        return (
            <div className="tweetItem">

            <h2> user: </h2>
            <p>{this.props.name} </p>

            <img src={this.props.profileImage} />


            <h2> date: </h2>
            <p>{this.props.created_at} </p>

              <h2> tweet: </h2>
              <p>{this.props.tweetText}</p>

              <h2> RTs: </h2>
              <p>{this.props.RTcount} </p>

            </div>
        )}
});


export default Tweet;
