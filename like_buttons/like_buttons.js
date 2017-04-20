
$("document").ready(function() {
	$(".circle_button").click(function() {
		if ($(".circle_button")[0]) {
			$(".button_background").removeClass("unliked").addClass("liked");
			$(".circle_button").removeClass("unliked").addClass("liked");
			$(".heart").removeClass("unliked").addClass("liked");
			$(".circle_button").prop("disabled",true);
		}
	});
});