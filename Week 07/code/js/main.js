$(document).ready(function() {
	console.log("here")
    $(".hamburger-menu").click(function() {
    	console.log("click")
        $(".nav").slideToggle();
        console.log("function")
    });
});