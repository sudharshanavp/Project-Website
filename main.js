$(".services").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

$(".services").mouseover(function () {
    $("p").css('cursor','pointer');    
});

