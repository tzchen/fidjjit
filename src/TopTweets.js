import React from 'react';
import Tweet from './Tweet';
import $ from 'jquery';
import './css/TopTweets.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// Twitter API (using Joel Ross's proxy)
var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"

// sorts results by most RTs
var sortByRT = "&result_type=popular"
// limits results to top 5 tweets
var top5 = "&count=5"




var TopTweets = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "", keywordsTweets:[]});
},
  getKeyword:function(e) {
      // URL of tweets containing the keyword in the text of the tweet, sorted by RT's
      var keywordURL = (baseURL + "search/?q=" + e.target.value + "&" + sortByRT + "&" + top5);
      console.log(keywordURL);

      //get tweets(containing the keyword)'s API object
      $.get({url:keywordURL, dataType: 'json'}).then(function(data) {
        // this.state.keywordsTweets = data.statuses;
        this.setState({keywordsTweets: data.statuses})
      }.bind(this))
      this.setState({searchKeyword: e.target.value})

    },





//Render the search box, and renders all of the tweets of the inputed keyword's
render:function() {
  if (typeof this.state.keywordsTweets[0] === "undefined") {
      console.log("array is undefined again");
      for (var i = 0; i < 5; i++) {
          this.state.keywordsTweets[i] = {text: "", id_str: "", retweet_coun: "", user: {"name": "", "screen_name": "", "profile_image_url":""}}
    }
  }
  console.log(this.state.keywordsTweets)
  return(
        <div className="container" id="TopTweetsResults">

        <div>
          <MuiThemeProvider>
           <Card>
             <CardMedia
               overlay={<CardTitle title="" subtitle="" />}
             >
               <img id="headlinePicture" src="/img/TopTweetsHeader.png" className="cover" />
             </CardMedia>
             <CardTitle className="center" title="So What Exactly is Fidjjit?" subtitle="(pronounced fi-jit)" />
             <CardText>
               <p id="small-text">
               Fidjjit is a tool to help people visualize and understand information created by the popular social networking
               site Twitter. Our goal is to help users discover new perceptions through manipulating existing tweet data
               and displaying it in a unique and meaningful way.
               </p>
             </CardText>
             <CardActions className="buttons">
             </CardActions>
           </Card>
           </MuiThemeProvider>
         </div>

          <form>
            <input onChange={this.getKeyword} type="text" id="search_keyword" placeholder="Type in an keyword...." pattern=".{1,140}"/>
          </form>





          <h1>Top 5 Most Retweeted Tweets containing   {this.state.searchKeyword} </h1>

              num 1
              <Tweet
              key={'tweet-' + i}
              keyword={this.state.searchKeyword}
              tweetID={this.state.keywordsTweets[0].id_str}
              tweetText={this.state.keywordsTweets[0].text}
              RTcount={this.state.keywordsTweets[0].retweet_count}
              created_at={this.state.keywordsTweets[0].created_at}
              name={this.state.keywordsTweets[0].user.name}
              username={this.state.keywordsTweets[0].user.screen_name}
              profileImage={this.state.keywordsTweets[0].user.profile_image_url}
              />

              num 2
              <Tweet
              keyword={this.state.searchKeyword}
              tweetID={this.state.keywordsTweets[1].id_str}
              tweetText={this.state.keywordsTweets[1].text}
              RTcount={this.state.keywordsTweets[1].retweet_count}
              created_at={this.state.keywordsTweets[1].created_at}
              name={this.state.keywordsTweets[1].user.name}
              username={this.state.keywordsTweets[1].user.screen_name}
              profileImage={this.state.keywordsTweets[1].user.profile_image_url}
              />
              num 3
              <Tweet
              keyword={this.state.searchKeyword}
              tweetID={this.state.keywordsTweets[2].id_str}
              tweetText={this.state.keywordsTweets[2].text}
              RTcount={this.state.keywordsTweets[2].retweet_count}
             created_at={this.state.keywordsTweets[2].created_at}
              name={this.state.keywordsTweets[2].user.name}
              username={this.state.keywordsTweets[2].user.screen_name}
              profileImage={this.state.keywordsTweets[2].user.profile_image_url}
              />

              num 4
              <Tweet
              keyword={this.state.searchKeyword}
              tweetID={this.state.keywordsTweets[3].id_str}
              tweetText={this.state.keywordsTweets[3].text}
              RTcount={this.state.keywordsTweets[3].retweet_count}
              created_at={this.state.keywordsTweets[3].created_at}
              name={this.state.keywordsTweets[3].user.name}
              username={this.state.keywordsTweets[3].user.screen_name}
              profileImage={this.state.keywordsTweets[3].user.profile_image_url}
              />

              num 5
              <Tweet
               keyword={this.state.searchKeyword}
               tweetID={this.state.keywordsTweets[4].id_str}
               tweetText={this.state.keywordsTweets[4].text}
               RTcount={this.state.keywordsTweets[4].retweet_count}
               created_at={this.state.keywordsTweets[4].created_at}
               name={this.state.keywordsTweets[4].user.name}
               username={this.state.keywordsTweets[4].user.screen_name}
               profileImage={this.state.keywordsTweets[4].user.profile_image_url}
                />

        </div>
    )}

});




export default TopTweets;

// <div>
//     { this.state.keywordsTweets.map(function(m, i) {
//          if (i < 5) {
//         return <Tweet
//     key={'tweet-' + i}
//     keyword={this.state.searchKeyword}
//     tweetID={m.id_str}
//     tweetText={m.text}
//     RTcount={m.retweet_count}
//     created_at={m.created_at}
//     name={m.user.name}
//     username={m.user.screen_name}
//     profileImage={m.user.profile_image_url}
//      />
//
//            }})}
//        </div>
//        {this.props.children}
//
// </div>
// )}
//
// });
