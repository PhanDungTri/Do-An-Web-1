$(document).ready(() => {
    $(".submit-btn").click(() => {
        var r = confirm("Do you want to remove the product?");
        if (r) {
            alert("Product removed!");
        }
    });
    $(".button").click(() => {
        var r = confirm("Do you want to save the changes?");
        if (r) {
            alert("Information saved!");
        }
    });
    $(".edit-bar").slideUp("fast");
    $(".edit-btn").click(function() {
        $(this).next().slideDown("fast");
    });
});