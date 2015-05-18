'use strict';

var React = require('react'),
	Player = require('./Player');

require('styles/scoreboard.scss');

var Scoreboard = React.createClass({

	render: function() {
		var players = this.props.players.map(function(player) {
			return (
				<Player 
					name={player.name} 
					score={player.score} 
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
