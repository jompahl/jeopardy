'use strict';

function filterChoice(choice) {
	var colorsInChoice = [];

	for (var key in choice) {
		if (key !== 'id' && key !== 'total' && choice[key] > 0) {
			colorsInChoice.push({
				name: key.substring(0, key.length - 1),
				amount: choice[key]
			});
		}
	}

	return {
		colors: colorsInChoice,
		totalAmount: choice.total
	};
}

function colorWithAmount(color, totalAmount) {
	if (totalAmount === 1) return color.name;

	return (color.amount === totalAmount ? "All " : color.amount + " ") + 
			color.name;
}

function appendColorDelimiter(colors, colorIndex, totalAmount) {
	var totalColorItems = colors.length;

	if (totalColorItems > colorIndex + 2 )
		return ", ";

	if (totalColorItems > colorIndex + 1)
		return " & ";

	return "";
}

function makeLabel(choice) {
	if (choice == null) return null;

	var label = "";
	var filteredChoice = filterChoice(choice);
	var colors = filteredChoice.colors;
	var totalAmount = filteredChoice.totalAmount;

	for (var i = 0; i < colors.length; i++) {
		label += colorWithAmount(colors[i], totalAmount);
		label += appendColorDelimiter(colors, i, totalAmount);
	}

	return label;
}

module.exports = {
	makeSelectedLabel: function(choice) {

		/*jshint unused:true, eqnull:true */
		if (choice == null) return null;

		// var label = flicsCount > 1 ? "Colors: " : "Color: ";
		// return label + makeLabel(choice, flicsCount);
		
		return makeLabel(choice);
	},

	makeColorOptions: function(colors, flicsCount) {
		var colorChoices = [];

		colors.forEach(function(choice) {
			if (choice.total === flicsCount) {
				var label = makeLabel(choice, flicsCount);

				colorChoices.push({value: choice.id, label: label });
				// colorChoices.push(
				// 	<option value={choice.id} key={choice.id}>
				// 		{label}
				// 	</option>
				// );
			}
		});

		return colorChoices;
	},
};
