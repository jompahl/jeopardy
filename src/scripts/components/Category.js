'use strict';

var React = require('react'),
	Card = require('./Card'),
	CategoryTitle = require('./CategoryTitle');

require('styles/category.scss');

var Category = React.createClass({
	propTypes: {
		title: React.PropTypes.string
	},

	render: function() {
		var multiplier = this.props.multiplier,
			title = this.props.data.title,
			players = this.props.players,
			categoryEntries = this.props.data.cards,

			cards = categoryEntries.map(function (e, index) {
				var value = (index + 1) * multiplier;
				return ( 
					<Card 
						key={index} 
						category={title} 
						value={value} 
						question={e.question} 
						players={players} 
						answer={e.answer} />
				);
			});

		return (
			<div className="Category">
				<CategoryTitle title={title} />
				{cards}
			</div>
		);
	}

});

module.exports = Category;
