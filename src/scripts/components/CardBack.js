'use strict';

var React = require('react');
var classnames = require('classnames');
var AnswerBoard = require('./AnswerBoard');
var Answer = require('./Answer');

require('styles/card-back.scss');

var cardHeight;
var cardWidth;

var CardBack = React.createClass({
	getInitialState: function() {
		return {
			closed: false
		};
	},

	componentDidMount: function () {
		cardHeight = this.refs.CardBack.getDOMNode().offsetHeight;
		cardWidth = this.refs.CardBack.getDOMNode().offsetWidth;
	},

	closeCard: function(event) {
		this.setState({closed: true});
	},
	_calcLeftTranslation: function() {
		if (cardWidth == null) return 0;

		var windowWidth = window.innerWidth;
		var column = Math.ceil(this.props.card.id / 5);
		var windowCenterH = windowWidth / 2;
		var cardCenterH = cardWidth / 2;

		return windowCenterH - cardCenterH - (cardWidth * (column - 1));
	},

	_calcTopTranslation: function() {
		if (cardHeight == null) return 0;

		var windowHeight = window.innerHeight;
		var row = Math.round(this.props.card.id % 5);
		if (row === 0) row = 5;
		var windowCenterV = windowHeight / 2;
		var cardCenterV = cardHeight / 2;

		return windowCenterV - cardHeight - ((row - 1) * cardHeight / 2);

	},

	render: function() {
		var classes = classnames({
          'CardBack': true,
          // 'is-open': this.props.open && !this.state.closed,
          'is-closed': this.state.closed
        });

		var style = {};
		var translateLeft = this._calcLeftTranslation();
		var translateTop = this._calcTopTranslation();

		if (this.props.open && !this.state.closed) {
			style = {
				background: 'white',
				left: translateLeft,
				marginTop: translateTop,
				transform: 'scale(2)',
				zIndex: '100'
			};
		}

		return (
				<article className={classes} ref="CardBack" style={style}>
					<h1 className="CardBack-category">
						{this.props.card.category} 
						<span className="CardBack-value"> – ${this.props.card.value} </span>
					</h1>

					<p className="CardBack-question">{this.props.card.question}</p>

					<Answer answer={this.props.card.answer} />

					<button onClick={this.closeCard} className="CardBack-close">Close</button>
					<button onClick={this.closeCard} className="CardBack-showAnswer">Show answer</button>
				</article>
		);
	}
});

module.exports = CardBack;
