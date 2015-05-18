'use strict';

var InputUtils = require('../utils/InputUtils');

module.exports = {

	/*jshint unused:true, eqnull:true */
	validateOrder: function(o) {
		return InputUtils.validateEmail(o.email) &&
			o.withAccessories != null &&
			o.promoCode != null  &&
			o.webshopItemId != null &&
			o.flicColorChoiceId != null &&
			o.paymentNonce != null &&
			o.countryCode != null;
	},
};

