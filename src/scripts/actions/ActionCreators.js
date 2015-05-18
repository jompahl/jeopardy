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
};

module.exports = ActionCreators;