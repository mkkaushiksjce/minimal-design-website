var email;
var password;
var phoneNumber;
var message;
var params;

$(document).ready(function () {

    email = $('#email').val();
    password = $('#password').val();
    phoneNumber = $('#phoneNumber').val();
    message = $('#message').val();
});

$('#sendMessage').click(function () {
    if ((email == null || email == undefined || email == "") && !commonFunctions.validateEmail(email)) {
        return;
    } else if (password == null || password == undefined || password == "") {
        return;
    } else if (message == null || message == undefined || message == "") {
        return;
    } else if (phoneNumber == null || phoneNumber == undefined || phoneNumber == "") {
        return;
    } else {
        params = {
            email: email, 
            password: password, 
            phoneNumber: phoneNumber, 
            message: message 
        }
    }
})