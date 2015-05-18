'use strict';

var WebAPI = require('./WebAPI');
var OrderUtils = require('./OrderUtils');
var ActionTypes = require('../constants/ActionTypes');
var ItemServerActionCreators = require('../actions/ItemServerActionCreators');

var ItemAPI = new WebAPI();

ItemAPI.requestAllItems = function() {
	var url = this.makeUrl("/webshop/products/flics");

	this.get(url).end(function (error, result) {
		if (result.status === 400) {
			console.log(400);
		} else if (!result.ok) {
			ItemServerActionCreators.handleAllItemsError(result);
		} else {
			ItemServerActionCreators.handleAllItemsSuccess(result);
		}
	});
};

ItemAPI.requestFlicItemCost = function(id, additionalClips, country) {
	var url = this.makeUrl(
			"/webshop/products/flics/cost/" + id + 
			"?country=" + country + 
			"&with_clips=" + additionalClips);

	this.get(url).end(function (error, result) {
		if (result.status === 400) {
			console.log(400);
		} else if (!result.ok) {
			ItemServerActionCreators.handleFlicCostError(result);
		} else {
			ItemServerActionCreators.handleFlicCostSuccess(result);
		}
	});
};

ItemAPI.makeFlicPurchase = function(order) {
	var url = this.makeUrl("/webshop/products/flics/order");

	if (!OrderUtils.validateOrder(order)) {
		ItemServerActionCreators.handleFlicCostError("invalid params");
		return;
	}

	this.post(url, order).end(function (error, result) {
		if (result.status === 400) {
			console.log(400);
		} else if (!result.ok) {
			ItemServerActionCreators.handleFlicCostError(result);
		} else {
			ItemServerActionCreators.handleFlicCostSuccess(result);
		}
	});
};

module.exports = ItemAPI;
