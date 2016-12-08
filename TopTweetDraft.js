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



var tweetsArr = [];
// var key = "";

var TopTweets = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "", keywordsTweets:[], KeywordID: ""});
},
  getKeyword:function(e) {

      // URL of tweets containing the keyword in the text of the tweet, sorted by RT's, returns top 5
      var keywordURL = (baseURL + "search/?q=" + e.target.value + top5 + sortByRT);
      this.setState({searchKeyword: e.target.value})
      // key = e.target.value;
      // console.log(this.state.keywordsTweets);

      //get tweets(containing the keyword)'s API object
      $.get({url:keywordURL, dataType: 'json'}).then(function(data) {
        tweetsArr = data.statuses;
        Promise.resolve(tweetsArr)
        // console.log(tweetsArr)
      }.bind(this))
      console.log(tweetsArr)
    },



//   //get tweets(containing the keyword)'s API object
//   $.get(keywordURL).then(function(data) {
//       // add to array of tweets
//       // console.log(data.statuses);

//       // this.setState({keywordsTweets: data.statuses)})
//       // console.log(this.state.keywordsTweets);
//       // PROMISE VALUES IN ARRAY ARE UNDEFINED OR AN EMPTY!!!!!!! HELP :(

//   }.bind(this))
//   // console.log(this.state.keywordsTweets);
// },

//OR^
// getKeyword:function(e) {
//     this.setState({searchKeyword: e.target.value})
//     // URL of tweets containing the keyword in the text of the tweet, sorted by RT's, returns top 5
//     var keywordURL = (baseURL + "search/?q=" + e.target.value + top5 + RTsort);
//   //   this.grabData(keywordURL);
//   // },
//
//   // similar to AJAX call
  // grabData:function(url) {
  //   return fetch(url)
  //   .then((result) => {
  //     // results are a Promise
  //     var res = result.json()
  //     console.log(res)
  //     console.log(res['[[PromiseValue]]'])
  //     var arr = []
  //     this.setState({keywordsTweets: ['[[PromiseValue]]'].statuses})
 // // OBJECTS IN ARRAY ARE ALWAYS UNDEFINED!!!!!!! HELP
  //     console.log(['[[PromiseValue]]'].statuses)
  //     arr.map(function(i) {
  //       arr.push(res[i].text);
  //       console.log(arr)
  //     return arr;
  //   });
  // });




//Render the search box, and renders all of the tweets of the inputed keyword's
render:function() {
  if (typeof tweetsArr[0] === "undefined") {
      console.log("array is undefined again");
      for (var i = 0; i < 5; i++) {
          tweetsArr[i] = [{text: "empty", id_str: "empty", retweet_coun: "empty", user: {"name": "empty", "screen_name": "empty", "profile_image_url":"empty"}}]
    }


  }
  return(
        <div className="container" id="TopTweetsResults">
          <form>
            <input onChange={this.getKeyword} type="text" id="search_keyword" placeholder="Type in an keyword...."/>
          </form>


          <p>{this.state.searchKeyword}</p>



          num 1
          <Tweet
              keyword={this.state.searchKeyword}
              tweetID={tweetsArr[0].id_str}
              tweetText={tweetsArr[0].text}
              RTcount={tweetsArr[0].retweet_count}
               />

          num 2
            <Tweet
                keyword={this.state.searchKeyword}
                tweetID={tweetsArr[1].id_str}
                tweetText={tweetsArr[1].text}
                RTcount={tweetsArr[1].retweet_count}
                 />
          num 3
                 <Tweet
                     keyword={this.state.searchKeyword}
                     tweetID={tweetsArr[2].id_str}
                     tweetText={tweetsArr[2].text}
                     RTcount={tweetsArr[2].retweet_count}
                      />


                      num 4
                             <Tweet
                                 keyword={this.state.searchKeyword}
                                 tweetID={tweetsArr[3].id_str}
                                 tweetText={tweetsArr[3].text}
                                 RTcount={tweetsArr[3].retweet_count}
                                  />

                                  num 5
                                         <Tweet
                                             keyword={this.state.searchKeyword}
                                             tweetID={tweetsArr[4].id_str}
                                             tweetText={tweetsArr[4].text}
                                             RTcount={tweetsArr[4].retweet_count}
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



 // {tweetsArr.map(function(m, i) {

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
