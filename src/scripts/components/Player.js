'use strict';

var React = require('react');
var Sound = require('./Sound');
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

    componentDidMount() {
        var audio = this.getDOMNode(this.refs.audioWrong);
    },
    
    handleAnswer: function(correct) {
        var cardId = this.props.cards.openCard;
        var card = this.props.cards.cards[cardId - 1];
        var value = correct ? card.value : -(card.value);

        ActionCreators
        .registerAnswer(this.props.player.id, value);
    },

	_handleCorrectAnswer: function() {
        this.handleAnswer(true);
	},

	_handleIncorrectAnswer: function() {
        this.handleAnswer(false);
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

        var player = this.props.player;
        var audio = 'gun.mp3';

		return (
			<div className="Player">
				<div className="Player-screen">
					<div className="Player-score">{player.score}</div>
					<div className="Player-name">{player.name}</div>
					{controls}
				</div>

                <audio ref="audioWrong" aria-hidden="true" preload>
                    <source src="gun.mp3" type="audio/mpeg" />
                </audio>
			</div>
		);
	}

});

module.exports = Player;
