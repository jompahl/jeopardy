'use strict';

var React = require('react');
var CategoryTitle = require('./CategoryTitle');
require('styles/category-row.scss');

var CategoryRow = React.createClass({
	propTypes: {
		categories: React.PropTypes.array.isRequired
	},

	render: function() {
		var categories = this.props.categories.map(function (category) {
			return <CategoryTitle title={category.title} key={category.title} />;
		});

		return (
			<div className="CategoryRow">
				{categories}		
			</div>
		);
	}
});

module.exports = CategoryRow;
