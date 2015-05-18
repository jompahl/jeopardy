'use strict';

var React = require('react');
var AppActionCreators = require('../actions/AppActionCreators');

var CloseModalButton = React.createClass({
	_onClick: function(e) {
		AppActionCreators.closeWebshop();
	},

	render: function() {
		return (
			<button 
				className="Modal-closeButton" 
				onClick={this._onClick}
				type="button" 
				aria-label="close">
				&times;
			</button>
		);
	},
});

module.exports = CloseModalButton;
