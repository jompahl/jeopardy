'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/ActionTypes');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _playerNames = ["Tobias", "Johan", "John", "Gurra"];
var _players = [];

function initPlayers() {
	var index = 0;
	_players = _playerNames.map(function(name) {
		index++;
		return (
			{
				id: index,
				name: name,
				score: 0
			}
		);
	});
}

var PlayerStore = assign({}, EventEmitter.prototype, {

	getState: function() {
		if (_players.length === 0) initPlayers();

		return {
			players: _players,
		};
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
});

PlayerStore.appDispatch = AppDispatcher.register(function(payload) {
	var source = payload.source;
	var action = payload.action;

	switch(action.type) {
		default:
			return true;
	}

	PlayerStore.emitChange();
	return true;
});

module.exports = PlayerStore;
