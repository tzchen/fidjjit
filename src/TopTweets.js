import React from 'react';
import Tweet from './Tweet';
import $ from 'jquery';
import './css/TopTweets.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';

// Twitter API (using Joel Ross's proxy)
var baseURL = "https://faculty.washington.edu/joelross/proxy/twitter/"

// sorts results by most RTs
var sortByRT = "&result_type=popular"
// limits results to top 5 tweets
var top10 = "&count=10"

var searchWord = ""
var input=''



var TopTweets = React.createClass({
  getInitialState:function() {
      return({searchKeyword: "...", key: "", keywordsTweets:[]});
  },

  componentDidMount: function() {
    var terms = firebase.database().ref("terms");
    terms.on("value", function(dataSnapshot) {
      console.log(dataSnapshot.val());
      console.log("firebaseRef");
    })
  },

    handleSubmit:function() {
      this.setState({searchKeyword:searchWord});
      this.setState({key:input});

      // URL of tweets containing the keyword in the text of the tweet, sorted by RT's
      var keywordURL = (baseURL + "search/?q=" + input + "&" + sortByRT + "&" + top10);
      console.log(keywordURL);

      // Get date
      let d = new Date();
      let month = d.getMonth() + 1;
      let day = d.getDay();
      let date = d.getDate();

      // Add keyword to firebase
      var terms = firebase.database().ref("terms");
      terms.push({
        date: date,
        day: day,
        month: month,
        term: searchWord,
      });


      //get tweets(containing the keyword)'s API object
      $.get({url:keywordURL, dataType: 'json'}).then(function(data) {
        this.setState({keywordsTweets: data.statuses})
      }.bind(this))
    },

    getKeyword:function(e) {
      // set state of searchKeyword and key
      searchWord = e.target.value.toLowerCase();
      console.log(e.target.value.toLowerCase());
      input = searchWord.replace("#", "%23")
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
                  <CardTitle className="center" title="So What Exactly is Top Tweets?" subtitle="(if you're looking for bird calls, you've come to the wrong place)" />
                      <CardText>
                          <p id="small-text">
                          Get the scoop on all the latest and hottest tweets. Just input a keyword or hashtag that interests you and we will show you the top 10 most retweeted tweets this week regarding that topic.
                          </p>
                      </CardText>
                      <CardActions className="buttons">
                      </CardActions>
                  </Card>
              </MuiThemeProvider>
         </div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.getKeyword} type="text" id="search_keyword" placeholder="Type in a keyword...."/>
            <MuiThemeProvider><RaisedButton type="submit" className="button" label="Search" icon={<Search />} /></MuiThemeProvider>
            <h1 id="title">Top 10 Most Retweeted Tweets containing {this.state.searchKeyword} </h1>
          </form>

          <div>
          <Container>
          <Row>
              { this.state.keywordsTweets.map(function(m, i) {
              var url = "https://twitter.com/" +  m.user.name + "/status/" + m.id_str;
              if (i < 10) {
                  return <Col sm={10} md={6} lg={3}><Tweet
                      key={'tweet-' + i}
                      tweetID={m.id_str}
                      tweetText={m.text}
                      RTcount={m.retweet_count}
                      created_at={m.created_at}
                      name={m.user.name}
                      username={m.user.screen_name}
                      profileImage={m.user.profile_image_url}

                      link={url}


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
