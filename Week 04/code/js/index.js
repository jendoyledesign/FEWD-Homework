jQuery(document).ready(function(){

    $(".learnmore").on('click',function(){
        $("#learnmoretext").slideDown();
        $(".learnmore").hide();
    });

      $(".readmore").on("click", function (){
        $("#show-this-on-click").slideDown();
        $(".readmore").hide();
        $(".readless").show();
    });
  
  $(".readless").on("click", function (){
        $("#show-this-on-click").slideUp();
        $(".readless").hide();
        $(".readmore").show();
  });

    $("h2").click(function(event){
        event.preventDefault();
    });
    
});