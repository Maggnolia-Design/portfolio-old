window.onload = function () {
   $(".pages").show();
};

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();

   //  $("#about-btn").click(function(event){
   //   //Your actions here
   //   $(".pages").hide();
   //   $(".portfolio-labels").hide();
   //   $(".see-more").hide();
   //   $("#about-page").show();
   //   $("li").removeClass("active");
   //   $("#about-btn").addClass("active");
   // });

   // $("#portfolio-btn").click(function(event){
   //  //Your actions here
   //  $(".pages").hide();
   //  $("#portfolio-page").show();
   //  $("li").removeClass("active");
   //  $("#portfolio-btn").addClass("active");
   // });

    $(document).scroll(function(){

      scroll_start = $(this).scrollTop();
      if(scroll_start < 300) {
        $('#masterhead').css('background-color', '#fefefe');
      } else {
        $('#masterhead').css('background-color', '#fff');
      }
    });

 });
