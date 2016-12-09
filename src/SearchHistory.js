import React from 'react';
import $ from 'jquery';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var SearchHistory = React.createClass({
	getInitialState:function() {
		return({searchKeyword: "", keywordsTweets:[], KeywordID: ""});
	},

	filter:function(e) {
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
					 <CardTitle className="center" title="So What Exactly is Fidjjit?" subtitle="(Search History)" />
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

				 <input onChange={this.filter} placeholder="Search history"/>
    		</div>
  	</div>
		)
	}

});

export default SearchHistory;

// For each prior search, store:
// 		- top 5 results
// 		- date/time of the search
// 		- the results from that particular date/time
