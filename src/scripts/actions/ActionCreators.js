'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');

var ActionCreators = {
    showCard: function(card) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.SHOW_CARD,
			card: card
		});
    },

    hideCard: function(card) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.HIDE_CARD,
			card: card
		});
    },

    registerAnswer: function(correct) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.REGISTER_ANSWER,
			correct: correct
		});
    },
};

module.exports = ActionCreators;
