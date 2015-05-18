'use strict';
var request = require('superagent');

var WebAPI = function() {
	var _self = null;
	var _url = 'https://testapi.flic.io/api/v1';
	var _timeout = 20000;

	this.makeUrl = function(part) {
		return _url + part;
	};

	this.get = function(url) {
		return request
			.get(url)
			.timeout(_timeout)
			.query();
	};

	this.post = function(url, params) {
		return request
			.post(url)
			.send(params)
			.set('Accept', 'application/json');
	};

	return _self;
};

module.exports = WebAPI;
