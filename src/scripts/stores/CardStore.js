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
var _openCard = 0;

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

function showCard(card) {
	_cards[card.id - 1].picked = true;
	_openCard = card.id;
}

function hideCard() {
	_openCard = 0;
}

var CardStore = assign({}, EventEmitter.prototype, {
	getState: function() {
		if (_categories.length === 0 || _cards.length === 0) init();

		return {
			categories: _categories,
			cards: _cards,
			openCard: _openCard,
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

CardStore.appDispatch = AppDispatcher.register(function(payload) {
	var source = payload.source;
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.SHOW_CARD:
			showCard(action.card);
			break;

		case ActionTypes.REGISTER_ANSWER:
			hideCard();
			break;

		default:
			return true;
	}

	CardStore.emitChange();
	return true;
});

module.exports = CardStore;
