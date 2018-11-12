$(document).ready(function(){
    $(".header-menu").hide();
    $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
        $(".body").toggleClass("blur");
        $("footer").toggleClass("blur");
        $(".header-menu").slideToggle();
    });
});
