$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();//Hides only Paragraph
      $("*").hide();//Hides Everything
      $(this).hide();//Selects Current HTML Element
    });
  });

  $(document).ready(function(){
    $("p").click(function(){
        $(this).hide();//Hides a Paragraph
    });
  });