'use strict';

var React = require('react');
var classnames = require('classnames');
var CardBack = require('./CardBack');
var ActionCreators = require('actions/ActionCreators');

require('styles/card.scss');

var Card = React.createClass({
	propTypes: {
		card: React.PropTypes.shape({
			id: React.PropTypes.number,
			value: React.PropTypes.number,
			category: React.PropTypes.string,
			question: React.PropTypes.string,
			answer: React.PropTypes.string,
			picked: React.PropTypes.bool,
			wasCorrect: React.PropTypes.bool
		}),
		openCard: React.PropTypes.number
	},

	_handleClick: function(event) {
		if (!this.props.card.picked && !this.props.openCard)
			ActionCreators.showCard(this.props.card);
	},

	_isOpen: function() {
		return this.props.openCard === this.props.card.id;
	},

	render: function() {
		var classes = classnames({
          'Card': true,
          'is-picked': this.props.card.picked,
          'is-open': this._isOpen()
        });
		
		var cardBack;

		if (this._isOpen()) {
			cardBack = (
				<CardBack card={this.props.card} />
			);
		}

		return (
			<div onClick={this._handleClick} className={classes}>
				<div className="Card-front">
					{this.props.card.value}
				</div>
				{{cardBack}}
			</div>
		);
	}

});

module.exports = Card;
