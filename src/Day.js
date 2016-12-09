import React from 'react';
import firebase from 'firebase';

var Day = React.createClass({
	componentDidMount:function() {
		var terms = firebase.database().ref('terms');
		terms.once('value').then(function(snapshot) {
			console.log(snapshot.val());
			snapshot.val();
			// function myFunction({
				// console.log(item);
			// });
		});



	},

	render:function() {
		return (
			<div>
				<p>{this.props.numSearched} people have searched '{this.props.term}' today!</p>
			</div>
		)
	}
});

export default Day;