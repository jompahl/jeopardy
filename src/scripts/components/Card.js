'use strict';

var React = require('react');
var classnames = require('classnames');
var CardBack = require('./CardBack');
var ActionCreators = require('actions/ActionCreators');

require('styles/card.scss');

var Card = React.createClass({
	getInitialState: function() {
		return {
			picked: false,
			open: false
		};
	},

	_handleClick: function(event) {
		var card = {};
		if (card.picked) return;
		ActionCreators.showCard(card);
		
		if (this.state.picked) {
			return;
		}
		this.setState({
			picked: true,
			open: true
		});
	},

	render: function() {
		var classes = classnames({
          'Card': true,
          'is-picked': this.state.picked,
          'is-open': this.state.open
        });
		
		var cardBack;

		if (this.state.open)
			cardBack = <CardBack card={this.props.card} open={this.state.open} />;

		return (
			<div onClick={this._handleClick} className={classes}>
				<div className="Card-front">${this.props.card.value}</div>
				{{cardBack}}
			</div>
		);
	}

});

module.exports = Card;
