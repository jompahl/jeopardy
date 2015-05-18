'use strict';

var React = require('react');
var PlayerControl = require('./PlayerControl');

require('styles/answer-board.scss');

var AnswerBoard = React.createClass({
	submitAnswer: function() {

		var newPlayerScore = this.props.players.map(function(player) {
			return ({
				name: player.name,
				score: player.score + 1
			});
		});

		this.props.updateScore(newPlayerScore);
	},

	render: function() {
		var value = this.props.value;

		var playerControls = this.props.players.map(function(player) {
			return (
				<PlayerControl 
					name={player.name} 
					value={value} 
				/>
			);
		});

		return (
			<div className="AnswerBoard">
				<div className="PlayerControls">
					{playerControls}
				</div>
			<button onClick={this.submitAnswer}>OK</button>
			</div>

		);
	}
});

module.exports = AnswerBoard;
