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
        console.log("close");
		AppDispatcher.handleViewAction({
			type: ActionTypes.HIDE_CARD,
			card: card
		});
    },

    registerAnswer: function(correct, value) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.REGISTER_ANSWER,
            correct: correct,
            value: value
		});
    },
};

module.exports = ActionCreators;
