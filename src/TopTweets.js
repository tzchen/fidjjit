import React from 'react';
import Tweet from './Tweet';
import $ from 'jquery';
import 'whatwg-fetch';
import './css/TopTweets.css'


// Twitter API (using Joel Ross's proxy)
var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"

// sorts results by most RTs
var sortByRT = "&result_type=popular"
// limits results to top 5 tweets
var top5 = "&count=5"




var TopTweets = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "", keywordsTweets:[], KeywordID: ""});
},
  getKeyword:function(e) {

      if (e.target.value.length > 0) {
      // URL of tweets containing the keyword in the text of the tweet, sorted by RT's, returns top 5
      var keywordURL = (baseURL + "search/?q=" + e.target.value + top5 + sortByRT);


      //get tweets(containing the keyword)'s API object
      $.get({url:keywordURL, dataType: 'json'}).then(function(data) {
        // this.state.keywordsTweets = data.statuses;
        this.setState({keywordsTweets: data.statuses})
        // console.log(this.state.keywordsTweets);
        // Promise.resolve(this.state.keywordsTweets)
        // console.log(this.state.keywordsTweets)
      }.bind(this))
      this.setState({searchKeyword: e.target.value})
    }

    },





//Render the search box, and renders all of the tweets of the inputed keyword's
render:function() {
  if (typeof this.state.keywordsTweets[0] === "undefined") {
      console.log("array is undefined again");
      for (var i = 0; i < 5; i++) {
          this.state.keywordsTweets[i] = {text: "empty", id_str: "empty", retweet_coun: "empty", user: {"name": "empty", "screen_name": "empty", "profile_image_url":"empty"}}
    }
  }
  console.log(this.state.keywordsTweets)
  return(
        <div className="container" id="TopTweetsResults">
          <form>
            <input onChange={this.getKeyword} type="text" id="search_keyword" placeholder="Type in an keyword...."/>
          </form>


          <h1>KEYWORD: {this.state.searchKeyword}</h1>



          num 1
          <Tweet
              key={'tweet-' + i}
              keyword={this.state.searchKeyword}
              tweetID={this.state.keywordsTweets[0].id_str}
              tweetText={this.state.keywordsTweets[0].text}
              RTcount={this.state.keywordsTweets[0].retweet_count}
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
                 />
          num 3
                 <Tweet
                     keyword={this.state.searchKeyword}
                     tweetID={this.state.keywordsTweets[2].id_str}
                     tweetText={this.state.keywordsTweets[2].text}
                     RTcount={this.state.keywordsTweets[2].retweet_count}
                      />


                      num 4
                             <Tweet
                                 keyword={this.state.searchKeyword}
                                 tweetID={this.state.keywordsTweets[3].id_str}
                                 tweetText={this.state.keywordsTweets[3].text}
                                 RTcount={this.state.keywordsTweets[3].retweet_count}
                                  />

                                  num 5
                                         <Tweet
                                             keyword={this.state.searchKeyword}
                                             tweetID={this.state.keywordsTweets[4].id_str}
                                             tweetText={this.state.keywordsTweets[4].text}
                                             RTcount={this.state.keywordsTweets[4].retweet_count}
                                              />
        </div>
        )}

  });


  // <Tweet
  //     keyword={this.state.searchKeyword}
  //     tweetID={index.id_str}
  //     tweetText={index.text}
  //     RTcount={index.retweet_count}
  //      />


//   <div>
//     { this.state.keywordsTweets.map(function(m, i) {
//       console.log(m)
//         return <Tweet
//           key={'tweet-' + i}
//           keyword={this.state.searchKeyword}
//           tweetID={m[i].id_str}
//           tweetText={m[i].text}
//           user={m[i].user.screen_name}
//           RTcount={m[i].retweet_count}
//           name={m[i].user.name}
//           profileImage={m[i].user.profile_image_url}
//           data={m}
//         />
//       })}
//   </div>
//   {this.props.children}
//
// </div>



 // {this.state.keywordsTweets.map(function(m, i) {

//   <div>
//     { this.state.keywordsTweets.map(function(m, i) {
//         return <Tweet
//           key={'tweet-' + i}
//           keyword={this.state.searchKeyword}
//           tweetID={m.id_str}
//           tweetText={m.text}
//           user={m.user.screen_name}
//           RTcount={m.retweet_count}
//           name={m.user.name}
//           profileImage={m.user.profile_image_url}
//           data={m}
//         />
//       })}
//   </div>
//   {this.props.children}
//
// </div>

export default TopTweets;
