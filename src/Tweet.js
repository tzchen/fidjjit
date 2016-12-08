import React from 'react';


//Renders one Tweet Result (goes with TopTweets Page)
var Tweet = React.createClass({
    render:function() {
        console.log(this.props.data);
        return (
            <div className="item">
              <div className="card">

                <p>{this.props.user}</p>
                <p>{this.props.text}</p>
              </div>
            </div>
        )}
        // make the results prettier - maybe get user profle image - or try to format it as a "tweet"
});

export default Tweet;
