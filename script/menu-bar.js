$(document).ready(function () {
    var prevPos = $(window).scrollTop();
    $(window).scroll(function () { 
        var currentPos = $(window).scrollTop();
        if (currentPos < 50)
            return;
        if (prevPos > currentPos)
        {
            $(".menu-bar").slideDown("fast");
            $(".menu-bar").css("display", "grid")
        }
        else
        {
            $(".menu-bar").slideUp("fast");
        }
        
        prevPos = currentPos;
    });
});