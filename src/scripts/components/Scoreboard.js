'use strict';

var React = require('react'),
	Player = require('./Player');

require('styles/scoreboard.scss');

var Scoreboard = React.createClass({
	propTypes: {
		cards: React.PropTypes.object,
		players: React.PropTypes.array
	},

	render: function() {
		var cards = this.props.cards;
		var players = this.props.players.map(function(player) {
			return (
				<Player 
					player={player} 
					name={player.name} 
					score={player.score} 
					cards={cards}
					key={player.name}
				/>
			);
		});

		return (
			<div className="Scoreboard">
				{players}
			</div>
		);
	}

});

module.exports = Scoreboard;
