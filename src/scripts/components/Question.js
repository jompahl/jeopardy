'use strict';

var React = require('react');
var classNames = require('classnames');
var AnswerBoard = require('./AnswerBoard');

require('styles/question.scss');

var Question = React.createClass({
	render: function() {

		return (
			<div className="Question">
				<header className="Question-header">
					<h1 className="Question-category">
						{this.props.card.category} | {this.props.card.value} 
					</h1>
				</header>

				<div className="Question-question">
					<p>{this.props.card.question}</p>
				</div>
			</div>
		);
	}

});

module.exports = Question;
