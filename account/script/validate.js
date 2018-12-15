$(document).ready(() => {
    $.validator.addMethod("pattern", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "Please enter a valid info.");

    $("#reg-form").validate(
        { 
        errorCointainer: "#message-box",
        errorLabelContainer: "#message-box",
        wrapper: "li",
        submitHandler: function() { alert("Submitted!") },
          
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                email: true
            },
            phonenumber: {
                required: true,
                pattern: /^0\d{9}/,
                digits: true
            },
            password: {
                required: true,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/
            },
            repassword: {
                required: true,
                equalTo: "#password",
            },
            term: {
                required: true
            }
        },
        messages: {
            firstname: "Please input your first name!",
            lastname: "Please input yout last name!",
            username: {
                required: "Please input email!",
                email: "Invalid email!"
            },
            phonenumber: {
                required: "Please input phone number!",
                pattern: "Invalid phone number!"
            },
            password:{
                required: "Please input password!",
                pattern: "Password must contain at least one lowercase letter, one uppercase letter, one digit and must not contain any special character! Password must have at least 8 characters!"
            },
            repassword: {
                required: "Please confirm your password!",
                equalTo: "Invalid password confirmation!"
            },
            term: {
                required: "You must accept the Terms of Use and Privacy Policy to continue!"
            }
        }
    });
});