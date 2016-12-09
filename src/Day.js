import React from 'react';
import firebase from 'firebase';


var Day = React.createClass({
	// getInitialState:function() {
	// 	var count = 0;
	// 	var terms = firebase.database().ref('terms');
	// 	var d = new Date();
	// 	var term = this.props.term;
	// 	var month = d.getMonth() + 1;
	// 	console.log(term);
	// 	terms.once('value').then(function(snapshot) {
	// 		var data = snapshot.val();
	// 		console.log(data);
	// 		for (var key in data) {
	// 			console.log(data[key].term + " term " + term);
	// 			console.log(data[key].month + " month " + month);
	// 			console.log(data[key].date + " date " + d.getDate());
	// 			if (data[key].term == term && 
	// 			data[key].month == month &&
	// 			data[key].date == d.getDate()) {
	// 				count++;
	// 				console.log(count);
	// 			}
	// 		}
	// 	});
	// 	console.log("COUNT = " + count);
 //    	return({numSearched:count});
 //  	},

	// componentDidMount:function() {
	// 	var terms = firebase.database().ref('terms');
	// 	var d = new Date();
	// 	var term = this.props.term;
	// 	var month = d.getMonth() + 1;
	// 	console.log(term);
	// 	terms.once('value').then(function(snapshot) {
	// 		var data = snapshot.val();
	// 		console.log(data);
	// 		for (var key in data) {
	// 			console.log(data[key].term + " term " + term);
	// 			console.log(data[key].month + " month " + month);
	// 			console.log(data[key].date + " date " + d.getDate());
	// 			if (data[key].term == term && 
	// 			data[key].month == month &&
	// 			data[key].date == d.getDate()) {
	// 				count++;
	// 				console.log(count);
	// 			}
	// 		}
	// 	});
	// 	console.log(count);
	// 	return count;
	// 	// console.log("set state");
	// 	// this.setState({numSearched:count});
	// 	// console.log(this.state.numSearched);
	// },

	render:function() {
		// this.getInitialState();
		return (
			<div>
				<p>{this.props.count} people have searched '{this.props.term}' today!</p>
			</div>
		)
	}
});

export default Day;