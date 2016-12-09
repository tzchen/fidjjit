import React from 'react';
import $ from 'jquery';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';
import './css/SearchHistory.css';
import Day from './Day';
import Month from './Month';
import firebase from 'firebase';

var SearchHistory = React.createClass({
	getInitialState:function() {
		return({searchKeyword: "", keywordsTweets:[], KeywordID: "", dayCount:0, monthCount:0});
	},

	getWord:function(e) {
		console.log(e.target.value);
		this.setState({searchKeyword:e.target.value});
		
		// Get count for days
		var dcount = 0;
		var mcount = 0;
		var terms = firebase.database().ref('terms');
		console.log("GOT REF");
		var d = new Date();
		var term = e.target.value.toLowerCase();
		var month = d.getMonth() + 1;
		terms.once('value').then(function(snapshot) {
			var data = snapshot.val();
			console.log(data);
			for (var key in data) {
				console.log(data[key].term + " term " + term);
				console.log(data[key].month + " month " + month);
				console.log(data[key].date + " date " + d.getDate());
				if (data[key].term === term && 
				data[key].month === month) {
					mcount++;
					this.setState({monthCount:mcount});
					if (data[key].date === d.getDate()) {
						dcount++;
						this.setState({dayCount:dcount});
					}
				}
			}
		}.bind(this));
		console.log("GET WORD COUNT = " + dcount);
		this.setState({dayCount:dcount});
		this.setState({monthCount:mcount});
	},

	render:function() {
		return (
			<div className="container" id="SearchHistoryResults">

				<MuiThemeProvider>
				 <Card>
					 <CardMedia
						 overlay={<CardTitle title="" subtitle="" />}
					 >
						 <img id="headlinePicture" src="./img/SearchHistoryHeader.png" className="cover" />
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

				 <form>
		         	<input onChange={this.getWord} type="text" id="search_keyword" placeholder="Type in a keyword...." />
				 	<Day count={this.state.dayCount} term={this.state.searchKeyword} />
				 	<Month count={this.state.monthCount} term={this.state.searchKeyword} />
		         </form>
		         
    		</div>
		)
	}

});

export default SearchHistory;
