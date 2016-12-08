import React from 'react';

var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"






var GetKeyword = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "", KeywordsTweets:[], KeywordID: ""});
},


  getKeyword:function(e) {
      this.setState({searchKeyword: e.target.value})
      var keywordURL = (baseURL + "search?q=" + e.target.value + "&result_type=popular");

  //get keyword containing tweets' API object
  $.get(keywordURL).then(function(data) {
      // add to array of tweets
      this.setState({keywordsTweets: data.keywords.items})
  }.bind(this))
},

//Render the search box, and renders all of the inputed keyword's results
render:function() {
  return(
        <div>
          <form>
            <input onChange={this.getkeyword} type="text" id="search_keyword" placeholder="Type in an keyword...." pattern="{2,}"/>
          </form>

          <div>
            { this.state.keywordsTweets.map(function(m, i) {
                return <keywordResults
                  key={'tweet-' + i}
                  keywor={this.state.searchKeyword}
                  tweetID={m.id_str}
                  tweetText={m.text}
                  user={user.screen_name}
                />
              }
            })}
          </div>
        </div>
  )}




export default TopTweet;
