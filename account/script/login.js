$(document).ready(() => {
   $("#login-form").submit(function(event) {
       if($("#username").val() == "phandungtri" && $("#password").val() == "12345678") {
            myObj = {name: "Dung Tri", isLogin: true};
            myJSON = JSON.stringify(myObj);
            localStorage.setItem("testJSON", myJSON);
            return;
       } 
       else
       {
           alert("Invalid username or password");
           event.preventDefault();
       }
   });
});