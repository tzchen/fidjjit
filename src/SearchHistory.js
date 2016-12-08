import React from 'react';

var SearchHistory = React.createClass({
	getInitialState:function() {

	},

	filter:function(e) {
		console.log(e.target.value);
		this.setState({searchString:e.target.value});
	},
	render:function() {
		var url = "52.8.18.242/tweets";

		$.get(url).then(function(data) {
			console.log(data);
		});

		return (
			<div>
                <input onChange={this.filter} placeholder="Search employees"/>
                <EmployeeTable data={employees}/>
            </div>
		)
	}

});

export default SearchHistory;
