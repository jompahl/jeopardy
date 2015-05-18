'use strict';

module.exports = {

	/**
	 * Returns true if found else false
	 */
	contains: function(needle, haystack) {
		for (var i = 0; i < haystack.length; i++) {
			if (haystack[i] === needle) return true;
		}

		return false;
	},

	/**
	 * Doesn't allow duplicates
	 */
	add: function(item, array) {
		if (!this.contains(item, array)) array.push(item);
	},

	remove: function(item, array) {
		var index = array.indexOf(item);

		if (index > -1) {
			array.splice(index, 1);
		}
	}
};

