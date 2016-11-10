$(document).ready(function() {

  var $toggleButton = $('.toggle-button');
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
  });

   $("#load-more").on("click", function (){
        $("#show-this-on-click").slideDown();
        $("#load-more").hide();
    });




  
});