$(document).ready(function(){
    $(".description").slideUp();
    $(".product-description-wrapper .title").click(function(){
        $(this).siblings(".description").slideToggle();
        $(this).toggleClass("chosen");
    });
});