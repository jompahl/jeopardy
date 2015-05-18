'use strict';

var React = require('react');
var AppActionCreators = require('../actions/AppActionCreators');

var OpenModalButton = React.createClass({
	getDefaultProps: function() {
		return {
			text: "Open Modal",
			buttonClass: "Button"
		};
	},

	_openModal: function(e) {
		AppActionCreators.openWebshop();
	},

	render: function() {
		return (
			<button 
				className={this.props.buttonClass}
				onClick={this._openModal}
				type="button" 
			>{this.props.text}</button>
		);
	},

});

module.exports = OpenModalButton;
