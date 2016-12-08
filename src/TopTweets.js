import React from 'react';
import Tweet from './Tweet';
import $ from 'jquery';


// Twitter API (using Joel Ross's proxy)
var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"

// sorts results by most RTs
var RTsort = "&result_type=popular"
// limits results to top 5 tweets
var top5 = "&count=5"



var TopTweets = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "", KeywordsTweets:[], KeywordID: ""});
},
  getKeyword:function(e) {
      this.setState({searchKeyword: e.target.value})
      // URL of tweets containing the keyword in the text of the tweet, sorted by RT's, returns top 5
      var keywordURL = (baseURL + "search?q=" + e.target.value + top5 + RTsort);


  //get tweets(containing the keyword)'s API object
  $.get(keywordURL).then(function(data) {
      // add to array of tweets
      this.setState({keywordsTweets: data.keywords.items})
  }.bind(this))
},

//Render the search box, and renders all of the tweets of the inputed keyword's
render:function() {
  return(
        <div>
          <form>
            <input onChange={this.getkeyword} type="text" id="search_keyword" placeholder="Type in an keyword...." pattern="{2,}"/>
          </form>

          <div>
            { this.state.keywordsTweets.map(function(m, i) {
                return <TopTweetsResults
                  key={'tweet-' + i}
                  keyword={this.state.searchKeyword}
                  tweetID={m.id_str}
                  tweetText={m.text}
                  user={m.user.screen_name}
                  profileImage ={m.user.profile_image_url}
                />
              })}
          </div>
        </div>
  )}

  });




export default TopTweets;
