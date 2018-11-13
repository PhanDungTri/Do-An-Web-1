$(document).ready(function(){
    $(".header-menu").hide();
    $(".sub-menu").hide();
    $(".burger-menu-icon").click(function () {
        $(this).toggleClass("menu-on");
        $(".body").toggleClass("lost-focus");
        $("footer").toggleClass("lost-focus");
        $(".header-menu").slideToggle();
        $(".sub-menu").slideUp();
        $("#category").removeClass("chosen");
    });

    $("#category").click(function(){
        $(this).toggleClass("chosen");
        $(".sub-menu").slideToggle();
    })
});
