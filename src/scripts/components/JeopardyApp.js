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

var JeopardyApp = React.createClass({
	getStatesFromStores: function() {
		return {
			cards: CardStore.getState(),
			players: PlayerStore.getState()
		};
	},

	getInitialState: function() {
		return this.getStatesFromStores();
	},

	render: function() {

		return (
			<div className="Jeopardy">
				<CategoryRow categories={this.state.cards.categories} />
				<Board cards={this.state.cards.cards} />
				<Scoreboard players={this.state.players.players} />
			</div>
		);
	}
});

var players = ["Tobias", "Johan", "John", "Gurra"];
React.render(<JeopardyApp players={players} />, document.getElementById('jeopardy')); // jshint ignore:line

module.exports = JeopardyApp;
