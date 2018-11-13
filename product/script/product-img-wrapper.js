$(document).ready(function () {
    $(".img-wrapper img").click(function () {
        var source = $(this).attr("src");
        $(".recent-img img").attr("src", source);
        $(this).addClass("active");
        $(this).siblings("img").removeClass("active");
    })
});