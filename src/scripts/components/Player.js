'use strict';

var React = require('react');

require('styles/player.scss');

var Player = React.createClass({

	getDefaultProps: function() {
		return {
			score: 0
		};
	},
	render: function() {
		return (
			<div className="Player">
				<div className="Player-screen">
					<div className="Player-score">${this.props.score}</div>
					<div className="Player-name">{this.props.name}</div>
				</div>
			</div>
		);
	}

});

module.exports = Player;
