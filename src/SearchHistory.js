import React from 'react';
import $ from 'jquery';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Day from './Day';

var SearchHistory = React.createClass({
	getInitialState:function() {
		return({searchKeyword: "", keywordsTweets:[], KeywordID: ""});
	},

	getWord:function(e) {
		console.log(e.target.value);
		this.setState({searchKeyword:e.target.value});
	},

	render:function() {
		var url = "52.8.18.242/tweets";

		$.get(url).then(function(data) {
			console.log(data);
		});

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

				 <Day numSearched='3' term='nintendo' />
    		</div>
		)
	}

});

export default SearchHistory;

// For each prior search, store:
// 		- top 5 results
// 		- date/time of the search
// 		- the results from that particular date/time
