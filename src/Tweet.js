import React from 'react';
import './css/Tweet.css'




 // TEST
var Tweet = React.createClass({
    render:function() {
        return (
            <div className="tweetItem">

            <h2> user: </h2>
            <p>{this.props.name} </p>

              <h2> tweet: </h2>
              <p>{this.props.tweetText}</p>

              <h2> RTs: </h2>
              <p>{this.props.RTcount} </p>
            </div>
        )}
});












//Renders one Tweet Result (goes with TopTweets Page)
// var Tweet = React.createClass({
//     render:function() {
//         console.log(this.props.data);
//         return (
//             <div className="item">
//               <div className="card">
//               <p>TWEEEEEET</p>
//
//                 <p>{this.props.user}</p>
//                 <p>{this.props.text}</p>
//               </div>
//             </div>
//         )}
//         // make the results prettier - maybe get user profle image - or try to format it as a "tweet"
// });

export default Tweet;
