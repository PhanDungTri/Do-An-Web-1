$(document).ready(function(){
    $(".description").slideUp();
    $(".discount .discount-left").click(function(){
        $(this).siblings(".description").slideToggle();
    });
    $(".discount .discount-right").click(function(){
        $(this).siblings(".description").slideToggle();
    });
});