'use strict';

var React = require('react');

require('styles/answer-board.scss');

var PlayerControl = React.createClass({
	render: function() {
		return (
			<div className="PlayerControl">
				<p className="PlayerControl-name">{this.props.name}</p>
				<input type="checkbox" value="correct" />Correct
				<br />
				<input type="checkbox" value="wrong" />Wrong
			</div>
		);
	}
});

module.exports = PlayerControl;
