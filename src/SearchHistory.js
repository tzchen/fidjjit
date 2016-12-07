import React from 'react';

var url = "52.8.18.242/tweets";

$.get(url).then(function(data) {
	console.log(data);
});