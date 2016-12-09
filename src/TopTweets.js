import React from 'react';
import Tweet from './Tweet';
import $ from 'jquery';
import './css/TopTweets.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Twitter API (using Joel Ross's proxy)
var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"

// sorts results by most RTs
var sortByRT = "&result_type=popular"
// limits results to top 5 tweets
var top10 = "&count=10"




var TopTweets = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "...", key: "", keywordsTweets:[]});
},

  getKeyword:function(e) {
      // set state of searchKeyword and key
      this.setState({searchKeyword:e.target.value})
      var input = e.target.value;
      input = input.replace("#", "%23")
      this.setState({key: input})

      // URL of tweets containing the keyword in the text of the tweet, sorted by RT's
      var keywordURL = (baseURL + "search/?q=" + input + "&" + sortByRT + "&" + top10);
      console.log(keywordURL);
      //get tweets(containing the keyword)'s API object
      $.get({url:keywordURL, dataType: 'json'}).then(function(data) {
        this.setState({keywordsTweets: data.statuses})
      }.bind(this))
    },


//Render the search box, and renders all of the tweets of the inputed keyword's
render:function() {

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
                  <CardTitle className="center" title="So What Exactly is Top Tweets" subtitle="(Of The Week)" />
                      <CardText>
                          <p id="small-text">
                          Get the scoop on all the latest and hottest tweets. Just input a keyword or hashtag that interests you and we will show you the top 10 most retweeted tweets this week regarding that topic.
                          </p>
                          </p>
                      </CardText>
                      <CardActions className="buttons">
                      </CardActions>
                  </Card>
              </MuiThemeProvider>
         </div>
          <form>
            <input onChange={this.getKeyword} type="text" id="search_keyword" placeholder="Search a topic.."/>
          </form>
          <h1>Top 10 Most Retweeted Tweets containing {this.state.searchKeyword} </h1>

          <div>
          <Container>
          <Row>
              { this.state.keywordsTweets.map(function(m, i) {
              var url = "https://twitter.com/" +  m.user.name + "/status/" + m.id_str;
              if (i < 10) {
                  return <Col sm={8} md={6} lg={3}><Tweet
                      key={'tweet-' + i}
                      tweetID={m.id_str}
                      tweetText={m.text}
                      RTcount={m.retweet_count}
                      created_at={m.created_at}
                      name={m.user.name}
                      username={m.user.screen_name}
                      profileImage={m.user.profile_image_url}

                      link={url}
                   />


                   /></Col>

             }})}
             </Row>
           </Container>
           </div>
           {this.props.children}
        </div>
    )}
});


export default TopTweets;
