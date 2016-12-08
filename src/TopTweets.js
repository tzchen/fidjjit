import React from 'react';
import Tweet from './Tweet';
import $ from 'jquery';
import 'whatwg-fetch';


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
      var keywordURL = (baseURL + "search/?q=" + e.target.value + top5 + RTsort);

  //get tweets(containing the keyword)'s API object
  $.get(keywordURL).then(function(data) {
      // add to array of tweets
      this.setState({KeywordsTweets: data.statuses})
  }.bind(this))
},

//OR^
// getKeyword:function(e) {
//     this.setState({searchKeyword: e.target.value})
//     // URL of tweets containing the keyword in the text of the tweet, sorted by RT's, returns top 5
//     var keywordURL = (baseURL + "search/?q=" + e.target.value + top5 + RTsort);
//   //   this.grabData(keywordURL);
//   // },
//
//   // similar to AJAX call
//   // grabData:function(url) {
//   //   return fetch(url)
//   //   .then((result) => {
//   //     // results are a Promise
//   //     var res = result.json()
//   //     console.log(res)
//   //     console.log(res['[[PromiseValue]]'])
//   //     var arr = []
//   //     this.setState({KeywordsTweets: ['[[PromiseValue]]'].statuses})
//   //     console.log(['[[PromiseValue]]'].statuses)
//   //     arr.map(function(i) {
//   //       arr.push(res[i].text);
//   //       console.log(arr)
//   //     return arr;
//   //   });
//   // });








//Render the search box, and renders all of the tweets of the inputed keyword's
render:function() {
  return(
        <div className="container" id="TopTweetsResults">
          <form>
            <input onChange={this.getKeyword} type="text" id="search_keyword" placeholder="Type in an keyword...."/>
          </form>

          <div>
            { this.state.KeywordsTweets.map(function(m, i) {
                return <Tweet
                  key={'tweet-' + i}
                  keyword={this.state.searchKeyword}
                  tweetID={m.id_str}
                  tweetText={m.text}
                  user={m.user.screen_name}
                  name={m.user.name}
                  profileImage={m.user.profile_image_url}
                />
              })}
          </div>

        </div>
  )}

  });



export default TopTweets;
