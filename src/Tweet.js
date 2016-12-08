import React from 'react';


//Renders one Tweet Result
var Tweet = React.createClass({
    render:function() {
        return (
            <div className="item" id="top5Keyword">
              <div className="card">
                <p>{this.props.user}</p>
                <p>{this.props.text}</p>
              </div>
            </div>
        )}
        // make the results prettier - maybe get user profle image - or try to format it as a "tweet"
});
