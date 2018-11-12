$(document).ready(function(){
    $(".header-menu").hide();
    $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
        $(".body").toggleClass("lost-focus");
        $("footer").toggleClass("lost-focus");
        $(".header-menu").slideToggle();
    });
});
