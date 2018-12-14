$(document).ready(() => {
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    if (obj == null || obj.isLogin == false) {
        $(".login-btn").text("sign in");
        $(".login-btn").attr("href", "account/user-login.html");
    }
    else
    {
        $(".login-btn").text(obj.name);
    }

    $(".login-btn").click(() => {
        if (obj.isLogin == false) {
            $(this).attr("href", "account/user-login.html");
        } 
        else {
            myObj = {name: "Dung Tri", isLogin: false};
            myJSON = JSON.stringify(myObj);
            localStorage.setItem("testJSON", myJSON);
            $(this).attr("href", "account/user-login.html");
        }
    })
})