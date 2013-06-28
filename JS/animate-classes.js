$(document).ready(function() {
	$(".expanding-div").each(function() {
		console.log("Binding expansion.");
		$(this).bind("mouseover.expandingDiv", function() {
			console.log("Running expansion.");
			$(this).animate({'width':'50%','height':'auto'}, 1000);
		});
		$(this).bind("mouseout.expandingDiv", function() {
			console.log("Removing expansion.");
			$(this).animate({'width':getCSS("width","expanding-div"),'height':getCSS("height","expanding-div")}, 100);
		});
	});
});

var getCSS = function (prop, fromClass) {
	var $inspector = $("<div>").css('display', 'none').addClass(fromClass);
	$("body").append($inspector); // add to DOM, in order to read the CSS property
	try {
		return $inspector.css(prop);
	} finally {
		$inspector.remove(); // and remove from DOM
	}
};