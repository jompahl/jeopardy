'use strict';

var React = require('react');
var Card = require('./Card');

require('styles/board.scss');

var Board = React.createClass({

	render: function() {
		var players = this.props.players;
		var openCard = this.props.cards.openCard;
		var cards = this.props.cards.cards.map(function (card, index) {
			return (
				<Card 
					card={card} 
					openCard={openCard} 
					key={index} 
				/>
			);
		});

		var columns = [];
		var column = [];

		cards.forEach(function(card, i) {
			column.push(cards[i]);

			if ((i % 5 === 4)) {
				columns.push(
					<div className="Board-column" key={i}>
						<div className="Board-cardsContainer">
							{column}
						</div>
					</div>
				);
				column = [];
			}
		});

		return (
			<div className="Board">
				{columns}
			</div>
		);
	}

});

module.exports = Board;
