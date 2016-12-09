import React from 'react';
import $ from 'jquery';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Day from './Day';
import firebase from 'firebase';

var SearchHistory = React.createClass({
	getInitialState:function() {
		return({searchKeyword: "", keywordsTweets:[], KeywordID: "", dayCount:0});
	},

	getWord:function(e) {
		console.log(e.target.value);
		this.setState({searchKeyword:e.target.value});
		var count = this.dayHits(e.target.value.toLowerCase());
		this.setState({dayCount:count});
	},

	dayHits:function(term) {
		var count = 0;
		var terms = firebase.database().ref('terms');
		var d = new Date();
		// var term = 'snow';
		var month = d.getMonth() + 1;
		console.log(term);
		terms.once('value').then(function(snapshot) {
			var data = snapshot.val();
			console.log(data);
			for (var key in data) {
				console.log(data[key].term + " term " + term);
				console.log(data[key].month + " month " + month);
				console.log(data[key].date + " date " + d.getDate());
				if (data[key].term === term && 
				data[key].month === month &&
				data[key].date === d.getDate()) {
					count++;
					console.log(count);
				}
			}
		});
		return count;
	},

	monthHits:function() {

	},

	render:function() {
		return (
			<div className="container">

				<MuiThemeProvider>
				 <Card>
					 <CardMedia
						 overlay={<CardTitle title="" subtitle="" />}
					 >
						 <img id="headlinePicture" src="/img/SearchHistoryHeader.png" className="cover" />
					 </CardMedia>
					 <CardTitle className="center" title="So Where Do I Start Snooping?" subtitle="(in a friendly way and non creepy way ofcourse)" />
					 <CardText>
						 <p id="small-text">
						 If you want to peep into the search history of your fellow netizens, just search a term you are interested in to see how many other people were curious about that topic!
						 </p>
					 </CardText>
					 <CardActions className="buttons">
					 </CardActions>
				 </Card>
				 </MuiThemeProvider>

				 <input onChange={this.getWord} placeholder="Search history"/>

				 <Day count={this.state.dayCount} term='snow' />
    		</div>
		)
	}

});

export default SearchHistory;

// For each prior search, store:
// 		- top 5 results
// 		- date/time of the search
// 		- the results from that particular date/time
