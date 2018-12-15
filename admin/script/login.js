$(document).ready(() => {
    text = localStorage.getItem("adminJSON");
    obj = JSON.parse(text);
    if (obj == null || obj.isLogin == false) {
        $(".login-btn").html("<i class=\"fa fa-user\"></i> sign in");
        $("#login-btn").text("login");
    }
    else
    {
        $(".login-btn").html("<i class=\"fa fa-user\"></i>" + obj.name);
        $("#login-btn").text(obj.name);
    }

    $(".login-btn").click(() => {
        if (obj.isLogin != false) {
            myObj = {name: "sign in", isLogin: false};
            myJSON = JSON.stringify(myObj);
            localStorage.setItem("adminJSON", myJSON);
        }
    })
});