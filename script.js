$(document).ready(function(){
  $("div").slice(0,3).show();
  $("#seeMore").click(function(e){
    e.preventDefault();
    $("div:hidden").slice(0,3).fadeIn("slow");
    
    if($("div:hidden").length == 0){
       $("#seeMore").fadeOut("slow");
      }
  });
})