'use strict';

var React = require('react');

var Answer = React.createClass({
	getInitialState: function() {
		return {
			show: false
		};
	},
	showAnwer: function(event) {
		this.setState({show: true});
	},
	render: function() {
		if (this.state.show) {
			return (
				<div className="CardBack-answer">Answer: {this.props.answer}</div>
			);
		} else {
			return <span></span>;
		}
	}

});

module.exports = Answer;
