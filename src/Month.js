import React from 'react';
import * as d3 from 'd3';

var Month = React.createClass({

	render:function() {
		if (this.props.count === 1) {
			return (
				<div>
					<h1 className="title">{this.props.count} person has searched '{this.props.term.toLowerCase()}' this month!</h1>
				</div>
			)
		} else {
			return (
				<div>
					<h1 className="title">{this.props.count} people have searched '{this.props.term.toLowerCase()}' this month!</h1>
				</div>
			)
		}
	}
});

export default Month;