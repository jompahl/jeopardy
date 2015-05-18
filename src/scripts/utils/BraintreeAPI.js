'use strict';

var WebAPI = require('./WebAPI');
var ActionTypes = require('../constants/ActionTypes');
var BraintreeServerActionCreators = require('../actions/BraintreeServerActionCreators');

var BraintreeAPI = new WebAPI();

BraintreeAPI.requestToken = function() {
	var url = this.makeUrl("/webshop/braintree-token");

	this.get(url).end(function (error, result) {
		if (result == null || result.status !== 200) {
			BraintreeServerActionCreators.handleTokenError(result);
		} else {
			BraintreeServerActionCreators.handleTokenSuccess(result);
		}
	});
};

module.exports = BraintreeAPI;
