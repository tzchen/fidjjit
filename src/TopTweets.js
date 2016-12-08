import React from 'react';

var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"
var RTsort = "&result_type=popular"
var top5 = "&count=5"


//Renders the Artist's Album Items
var TopTweetsResults = React.createClass({
    render:function() {
        return (
            <div className="item" id="top5Keyword">
              <div className="card">
                <p>{this.props.user}</p>
                <p>{this.props.text}</p>
              </div>
            </div>
        )}
});



var GetKeyword = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "", KeywordsTweets:[], KeywordID: ""});
},
  getKeyword:function(e) {
      this.setState({searchKeyword: e.target.value})
      var keywordURL = (baseURL + "search?q=" + e.target.value + top5 + RTsort);


  //get tweets(containing the keyword)'s API object
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
                return <TopTweetsResults
                  key={'tweet-' + i}
                  keyword={this.state.searchKeyword}
                  tweetID={m.id_str}
                  tweetText={m.text}
                  user={m.user.screen_name}
                  profileImage ={m.user.profile_image_url}
                />
              }
            })}
          </div>
        </div>
  )}




export default TopTweet;
