'use strict';

var WebAPI = require('./WebAPI');
var OrderUtils = require('./OrderUtils');
var ActionTypes = require('../constants/ActionTypes');
var ItemServerActionCreators = require('../actions/ItemServerActionCreators');

var OrderAPI = new WebAPI();

OrderAPI.makeFlicPurchase = function(order) {
	var url = this.makeUrl("/webshop/flics/order");

	this.post(url, order).end(function (error, result) {
		if (result.status === 200) {
			ItemServerActionCreators.handleFlicPurchaseSuccess(result);
		} else {
			ItemServerActionCreators.handleFlicPurchaseError(result);
		}
	});
};

module.exports = OrderAPI;
