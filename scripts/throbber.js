require(['$views/throbber#Throbber'], function(Throbber) {

	console.log("Loading the Throbbers!");
	var throbber_remix = Throbber.forElement(document.getElementById('remixes'));
	throbber_remix.hide();
	var throbber_samples = Throbber.forElement(document.getElementById('samples'));
	throbber_samples.hide();
	var throbber_covers = Throbber.forElement(document.getElementById('covers'));
	throbber_covers.hide();

	var showRemixThrobber = function() {
		throbber_remix.show();
	}

	var hideRemixThrobber = function() {
		throbber_remix.hide();
	}

	var showSamplesThrobber = function() {
		throbber_samples.show();
	}

	var hideSamplesThrobber = function() {
		throbber_samples.hide();
	}

	var showCoversThrobber = function() {
		throbber_covers.show();
	}

	var hideCoversThrobber = function() {
		throbber_covers.hide();

	}

	exports.showRemixThrobber = showRemixThrobber;
	exports.hideRemixThrobber = hideRemixThrobber;
	exports.showSamplesThrobber = showSamplesThrobber;
	exports.hideSamplesThrobber = hideSamplesThrobber;
	exports.showCoversThrobber = showCoversThrobber;
	exports.hideCoversThrobber = hideCoversThrobber;


});