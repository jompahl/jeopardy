'use strict';

var React = require('react');
var classNames = require('classnames');

var Answer = React.createClass({
	render: function() {

		var styles = classNames({
			'CardBack-answer': true,
			'wasCorrect': this.props.wasCorrect,
			'wasIncorrect': !this.props.wasCorrect
		});

		return (
			<div className={styles}>Answer: {this.props.answer}</div>
		);
	}

});

module.exports = Answer;
