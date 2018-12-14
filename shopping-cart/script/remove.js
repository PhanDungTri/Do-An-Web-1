$(document).ready(() => {
    $(".remove-btn").click(() => {
        var r = confirm("Do you want to remove the product?");
        if (r) {
            alert("Product removed!");
        }
    })

    $(".checkout-button").click(() => {
        text = localStorage.getItem("testJSON");
        obj = JSON.parse(text);
        if (obj == null || obj.isLogin == false) {
            window.location.href = "../account/user-login.html";
        }
        else {
            alert("Redirecting to checkout page!")
        }
    })
})