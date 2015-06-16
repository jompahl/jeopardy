'use strict';

var React = require('react');
var ActionCreators = require('actions/ActionCreators');

require('styles/player.scss');

var correct = require('svg/checkocircle.svg');
var incorrect = require('svg/deleteocircle.svg');

var Player = React.createClass({
	propTypes: {
		cards: React.PropTypes.object,
		player: React.PropTypes.object
	},

	getDefaultProps: function() {
		return {
			score: 0
		};
	},

	_handleCorrectAnswer: function() {
		ActionCreators.registerAnswer(true);
	},

	_handleIncorrectAnswer: function() {
		ActionCreators.registerAnswer(false);
	},

	render: function() {
		var controls;

		if (this.props.cards.openCard) {
			controls = (
					<div className="Player-controls">
						<button 
							className="ButtonCorrect"
							onClick={this._handleCorrectAnswer}
						>
							<img src={correct} />
						</button>

						<button
							className="ButtonIncorrect"
							onClick={this._handleIncorrectAnswer}
						>
							<img src={incorrect} />
						</button>
					</div>
			);
		}

		return (
			<div className="Player">
				<div className="Player-screen">
					<div className="Player-score">{this.props.score}</div>
					<div className="Player-name">{this.props.name}</div>
					{controls}
				</div>

			</div>
		);
	}

});

module.exports = Player;
