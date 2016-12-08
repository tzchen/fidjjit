import React from 'react';
import Tweet from './Tweet';
import $ from 'jquery';
import 'whatwg-fetch';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// Twitter API (using Joel Ross's proxy)
var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"

// sorts results by most RTs
var RTsort = "&result_type=popular"
// limits results to top 5 tweets
var top5 = "&count=5"



var TopTweets = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "", keywordsTweets:[], KeywordID: ""});
},
  getKeyword:function(e) {

      // URL of tweets containing the keyword in the text of the tweet, sorted by RT's, returns top 5
      var keywordURL = (baseURL + "search/?q=" + e.target.value + top5 + RTsort);
      this.setState({searchKeyword: e.target.value})
      console.log(this.state.keywordsTweets);

  //get tweets(containing the keyword)'s API object
  $.get(keywordURL).then(function(data) {
      // add to array of tweets
      console.log(data.statuses);
      this.setState({keywordsTweets: data.statuses})
      console.log(this.state.keywordsTweets);
      // PROMISE VALUES IN ARRAY BECOME UNRESOLVED OR UNDEFINED RANDOMLY!!!!!!! HELP
  }.bind(this))
  console.log(this.state.keywordsTweets);
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
  return(
        <div className="container" id="TopTweetsResults">

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

          <form>
            <input onChange={this.getKeyword} type="text" id="search_keyword" placeholder="Type in an keyword...."/>
          </form>

          <div>
            { this.state.keywordsTweets.map(function(m, i) {
                return <Tweet
                  key={'tweet-' + i}
                  keyword={this.state.searchKeyword}
                  tweetID={m.id_str}
                  tweetText={m.text}
                  user={m.user.screen_name}
                  name={m.user.name}
                  profileImage={m.user.profile_image_url}
                  data={m}
                />
              })}
          </div>
          {this.props.children}

        </div>
      )}
  });



export default TopTweets;
