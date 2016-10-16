$(document).ready(function() {
  $('#submit-btn').on("click", function(evt){ // Create an on click event for the submit button
  evt.preventDefault();  // Prevent a form submission
    var city = $('#city-type').val(); // Store user input
    $('#city-input').val(''); // Get the string value of your user's input
       console.log(city); 

    // Assign the city variable the value of the city input field
    // Get the first element from an attribute name using

    if (city == "NYC" || city =="nyc" || city == "New York" || city == "New York City" || city == "new york city"){ // How do I do other options: ny, New york, etc?
      $('body').attr('class','nyc');
    } else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
       $('body').attr('class','sf');
    } else if (city == "LA" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
       $('body').attr('class','la');
    } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
       $('body').attr('class','austin');
    } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
       $('body').attr('class','sydney');
    }
  });
});

