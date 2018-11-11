$(document).ready(function(){
    $("#popular").show("fast");
    $("#popular-btn").addClass("active");

    function showContent(content){
        $(content).siblings().hide("fast", function(){
            $(content).show("fast");
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