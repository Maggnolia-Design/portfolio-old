window.onload = function () {
   $(".pages").show();
   $("li").removeClass("active");
};

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();

    $("#about-btn").click(function(event){
      $("html, body").animate({ scrollTop: "581px" });
   });

   $("#portfolio-btn").click(function(event){
    $("html, body").animate({ scroll_start: "1460px" });

   });

    $(document).scroll(function(){

      scroll_start = $(this).scrollTop();
      if(scroll_start < 590) {
        // $('#masterhead').css('background-color', '#fff');
        $("li").removeClass("active");
      } else if(scroll_start <1460){
        // $('#masterhead').css('background-color', '#eef');
        $("li").removeClass("active");
        $("#about-btn").addClass("active");
      } else {
        // $('#masterhead').css('background-color', '#def');
        $("li").removeClass("active");
        $("#portfolio-btn").addClass("active");
      }
    });

 });
