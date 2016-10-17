$(document).ready(function(){
// Which location did the user choose
var city = ['NYC', 'LA', 'SF', 'ATX', 'SYD'];

// Add values to the "select" menu with for loop
 for (var i = 0; i < city.length; i++ ) {
    $('#city-type').append('<option>' + city[i] + '<option>');
 }

// Update the background based on the dropdown input

     // Track the change of user actions

     $('form').on('change', '#city-type', function(){
      console.log("function");
      var city = $('#city-type').val()
       if (city == "NYC"){ 
          $('body').attr('class','nyc');
        } else if (city == "SF") {      
           $('body').attr('class','sf');
        } else if (city == "LA") {      
           $('body').attr('class','la');
        } else if (city == "AUS") {      
           $('body').attr('class','austin');
        } else if (city == "SYD") {      
           $('body').attr('class','sydney');
       }
     });

});