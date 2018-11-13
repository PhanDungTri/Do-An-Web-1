$(document).ready(function(){
    $("#popular").fadeIn("fast");
    $("#popular-btn").addClass("active");

    function showContent(content){
        $(content).siblings().fadeOut("fast", function(){
            $(content).fadeIn("fast");
        });
    }

    $("#popular-btn").click(function()
    {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        showContent("#popular");
    });

    $("#newest-btn").click(function()
    {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        
        showContent("#newest");
    });
});