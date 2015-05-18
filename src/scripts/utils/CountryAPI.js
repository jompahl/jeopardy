'use strict';

var WebAPI = require('./WebAPI');
var ActionTypes = require('../constants/ActionTypes');
var CountryServerActionCreators = require('../actions/CountryServerActionCreators');

var CountryAPI = new WebAPI();

CountryAPI.requestCountries = function() {
	var url = this.makeUrl("/webshop/countries");

	this.get(url).end(function (error, result) {
		if (result.status === 400) {
			console.log(400);
		} else if (!result.ok) {
			CountryServerActionCreators.handleCountriesError(result);
		} else {
			CountryServerActionCreators.handleCountriesSuccess(result);
		}
	});
};

module.exports = CountryAPI;
