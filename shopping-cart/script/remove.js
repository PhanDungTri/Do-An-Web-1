$(document).ready(() => {
    $(".remove-btn").click(() => {
        var r = confirm("Do you want to remove the product?");
        if (r) {
            alert("Product removed!");
        }
    })
})