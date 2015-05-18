'use strict';

var React = require('react');

var CategoryTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			<h2 className="Category">{this.props.title}</h2>
		);
	}

});

module.exports = CategoryTitle;
