'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/ActionTypes');
var assign = require('object-assign');

var _CHANGE_EVENT = 'change';
var _ROUND = 1;
var _MULTIPLIER = _ROUND * 100;

var _data = require('questions/andy.json');
var _categories = [];
var _cards = [];

function init() {
	_categories = _data.map(function(category) {
		return category;
	});

	var id = 0;

	_categories.forEach(function(category) {
		category.cards.forEach(function(card, i) {
			_cards.push({
				id: ++id,
				value: _MULTIPLIER * ++i,
				category: category.title,
				question: card.question,
				answer: card.answer,
				picked: false,
				wasCorrect: null
			});
		});
	});
}

var QuestionStore = assign({}, EventEmitter.prototype, {
	getState: function() {
		if (_categories.length === 0 || _cards.length === 0) init();

		return {
			categories: _categories,
			cards: _cards,
		};
	},

	emitChange: function() {
		this.emit(_CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(_CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(_CHANGE_EVENT, callback);
	},
});

QuestionStore.appDispatch = AppDispatcher.register(function(payload) {
	var source = payload.source;
	var action = payload.action;

	switch(action.type) {
		default:
			return true;
	}

	QuestionStore.emitChange();
	return true;
});

module.exports = QuestionStore;
