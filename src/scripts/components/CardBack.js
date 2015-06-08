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
			animateIn: false,
			closed: false,
			shadow: 'none',
			transform: 'scale(1)',
			zIndex: 1
		};
	},

	componentDidMount: function () {
		cardHeight = this.refs.CardBack.getDOMNode().offsetHeight;
		cardWidth = this.refs.CardBack.getDOMNode().offsetWidth;
		this.animateIn();
	},

	componentDidUpdate() {
		if (this.state.animateIn) {
			this.animateIn();
			this.setState({animateIn: false});
		}
	},

	closeCard: function(event) {
		this.setState({closed: true});
		this.animateOut();
	},

	_calcLeftTranslation: function() {
		var windowWidth = window.innerWidth;
		var columnWidth = Math.ceil(windowWidth / 5);
		var column = Math.ceil(this.props.card.id / 5);
		
		return (3 - column) * columnWidth;
	},

	_calcTopTranslation: function() {
		var cardHeight = this.refs.CardBack.getDOMNode().offsetHeight;
		var row = Math.round(this.props.card.id % 5);

		return (3 - (row === 0 ? 5 : row)) * cardHeight;
	},

	animateIn() {
		if (this.state.closed) return;

		var scale = 2.5;
		var left = (this._calcLeftTranslation() / scale) + "px";
		var top = (this._calcTopTranslation() / scale) + "px";
		var transform = 'scale(' + scale + ')';
		transform += ' translate(' + left + ', ' + top + ')';
		transform += ' rotateY(180deg)';

		this.setState({
			transform: transform,
			shadow: '0 4px 12px 0 rgba(0, 0, 0, .35)',
			zIndex: 2
		});
	},

	animateOut() {
		this.setState({
			transform:'scale(1)',
			shadow: 'none',
			zIndex: 1
		});
	},

	render: function() {
		var classes = classnames({
          'CardBack': true,
          'is-closed': this.state.closed
        });

		var styles = {
			boxShadow: this.state.shadow,
			height: '100%',
			left: 0,
			position: 'absolute',
			top: 0,
			transform: this.state.transform,
			transformStyle: 'preserve-3d',
			transition: 'all 500ms ease',
			width: '100%',
			zIndex: this.state.zIndex
		};

		return (
			<div className={classes} ref="CardBack" style={styles}>
				<div className="CardBack-front"></div>

				<div className="CardBack-back">
					<h1 className="CardBack-category">
						{this.props.card.category} 
						<span className="CardBack-value"> – ${this.props.card.value} </span>
					</h1>

					<p className="CardBack-question">{this.props.card.question}</p>

					<Answer answer={this.props.card.answer} />

					<button onClick={this.closeCard} className="CardBack-close">Close</button>
					<button onClick={this.closeCard} className="CardBack-showAnswer">Show answer</button>
				</div>
			</div>
		);
	}
});

module.exports = CardBack;
