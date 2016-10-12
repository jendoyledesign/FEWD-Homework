$(document).ready(function(){

	console.log ("here");

// Write a function that updates the background image of the page based off the city input field

// Define a variable named city

var city;

console.log("city");

// Create an on click event for the submit button

$("#submit-btn").on("click", function (){

	changeCityImage ();

	var city = $("#city-type").val();

	$("#city-type").text(city);

	});

// Define changeCityImage function

function changeCityImage (){

	// Assign the city variable the value of the city input field


		if (city = "New York" || "New York City" || "NYC") {
				$("body").css("background", "url('images/nyc.jpg')" );
			} else if (city = "San Francisco" || "SF" || "Bay Area") {
				$("body").css("background", "url('images/sf.jpg')");
			} else if (city = "Los Angeles" || "LA" || "LAX") {
				$("body").css("background", "url('images/la.jpg')");
			} else if (city = "Austin" || "ATX") {
				$("body").css("background", "url('images/austin.jpg')");
			} else if (city = "Sydney" || "SYD") {
				$("body").css("background", "url('images/sydney.jpg')");
			} 	

		// Prevent a form submission
			 
			   else {
				$("#submit-btn").click(function(event){
       			 event.preventDefault(); console.log("preventDefault");
    });
			} 

	};


});