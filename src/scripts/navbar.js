$(document).ready(function() {
  startNavigation();
});


function startNavigation(){
  var sidebarOffset = $("#sidebar").offset();
  var contentDivs = $(".section");
  $(document).scroll(function() {
    console.log(sidebarOffset);
    if(sidebarOffset.top < $(window).scrollTop()){
      $("body").addClass("fixed");
    }else{
      $("body").removeClass("fixed");
    }

    contentDivs.each(function(div){
      var thisOffset = $(this).offset();
      var actPosition = thisOffset.top - $(window).scrollTop();
      if(actPosition < sidebarOffset.top && actPosition + $(this).height()>0){
        var selectNavblock = "#nb-" + $(this).attr('id');
        console.log("#nb-" + $(this).attr('id'));
        $(".navblock-active").removeClass("navblock-active");
        $(selectNavblock).addClass("navblock-active");
      }
    });
  });
}
