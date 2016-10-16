$(document).ready(function(){

	console.log ("here");

// Write a function that updates the background image of the page based off the city input field

// Define a variable named city

var city;

console.log("city");

// Create an on click event for the submit button

$("#submit-btn").on("click", function (evt){


		// Prevent a form submission

	evt.preventDefault();
	changeCityImage ();

	var city = $("#city-type").val();

	$("#city-type").text(city);


	});

// Define changeCityImage function

function changeCityImage (){

	// Assign the city variable the value of the city input field


		if (city = "New York" || "New York City" || "NYC") {
				$("body").css("background", "url('images/nyc.jpg')" );
			} 
  
	};


});