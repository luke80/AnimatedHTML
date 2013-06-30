var expandEvent = function() {
	console.log("Running expansion.");
	$(this).css("z-index", 10000);
	$(this).animate({'width':'40em','height':'auto'}, 1000);		
	$("body").unbind(".expandingDiv");
	window.setTimeout("$(\"body\").bind(\"click.expandingDiv touchstart.expandingDiv\", contractEvent);", 100);
};
var contractEvent = function() {
	console.log("Removing expansion.");
	$(".expanding-div").animate({"width":getCSS("width","expanding-div"),"height":getCSS("height","expanding-div")}, 100);
	$("body").unbind(".expandingDiv");
};

$(document).ready(function() {
	$(".expanding-div").each(function() {
		console.log("Binding expansion.");
		$(this).bind("click.expandingDiv touchstart.expandingDiv", expandEvent);		
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
