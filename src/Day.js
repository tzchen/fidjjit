import React from 'react';
import firebase from 'firebase';


var Day = React.createClass({
	
	render:function() {
		if (this.props.count === 1) {
			return (
				<div>
					<h1 className="title">{this.props.count} person has searched '{this.props.term.toLowerCase()}' today!</h1>
				</div>
			)
		} else {
			return (
				<div>
					<h1 className="title">{this.props.count} people have searched '{this.props.term.toLowerCase()}' today!</h1>
				</div>
			)
		}
	}
});

export default Day;