'use strict';

var React = require('react');

// Stores
var CardStore = require('stores/CardStore.js');
var PlayerStore = require('stores/PlayerStore.js');

//Components
var Board = require('./Board');
var Scoreboard = require('./Scoreboard');
var CategoryRow = require('./CategoryRow');
var data = require('questions/andy.json');

// Styles
require('styles/init/base.scss');
require('styles/main.scss');

function getStateFromStores() {
	return {
		cards: CardStore.getState(),
		players: PlayerStore.getState()
	};
}

var JeopardyApp = React.createClass({

	getInitialState: function() {
		return getStateFromStores();
	},

	componentDidMount: function() {
		CardStore.addChangeListener(this._onChange);
		PlayerStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		CardStore.removeChangeListener(this._onChange);
		PlayerStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState(getStateFromStores());
	},

	render: function() {

		return (
			<div className="Jeopardy">
				<CategoryRow categories={this.state.cards.categories} />

				<Board cards={this.state.cards} />

				<Scoreboard 
					cards={this.state.cards} 
					players={this.state.players.players} 
				/>
			</div>
		);
	}
});

var players = ["Tobias", "Johan", "John", "Gurra"];
React.render(<JeopardyApp players={players} />, document.getElementById('jeopardy')); // jshint ignore:line

module.exports = JeopardyApp;
