$(document).ready(function() {


	$(".button").click(function() {

        if ($('.menu').css('display') == 'none') {
            $(".menu").show("slide", 200);
            $(".button").addClass("backtime");
        } 

        else {
            $(".menu").hide("slide", 200);
            $(".button").removeClass("backtime");
        };

	});

});