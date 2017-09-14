var formMap = {
    name: "name",
    email: "email",
    subject: "subject",
    message: "message"
};

var validationMap = {
    name: false,
    email: false,
    subject: false,
    message: false
};

var checkboxChecked = false;

$(document).ready(function () {

    $('#contactusForm').click(function () {
        var name = $.trim($("#name").val());
        var email = $.trim($("#email").val());
        var subject = $.trim($("#subject").val());
        var message = $.trim($("#message").val());
        var params;
        var validationError = false;

        if ((email == null || email == undefined || email == "") || !validateEmail(email)) {
            validationError = true;
            $("#email").addClass("error").val("");
        }
        if (name == null || name == undefined || name == "" || !validateSpace(name)) {
            validationError = true;
            $("#name").addClass("error").val("");
        }
        if (subject == null || subject == undefined || subject == "" || !validateSpace(subject)) {
            validationError = true;
            $("#subject").addClass("error").val("");
        }
        if (message == null || message == undefined || message == "" || !validateSpace(message)) {
            validationError = true;
            $("#message").addClass("error").val("");
        }
        
        if (!validationError && checkboxCheked()) {
            params = {
                email: $.trim(email),
                name: $.trim(name),
                subject: $.trim(subject),
                message: $.trim(message)
            }
            apiService.sendMail(params).then(function (successData) {
                removeErrorClass(formMap);
                console.log("successData", successData);
            }, function (errorData) {
                removeErrorClass(formMap);
                console.log("errorData", errorData);
            });
        }
    });
});

// function validate(formMap, validationMap){
//     var currElm;
//     for(var key in formMap){
//         var currElm = $(formMap[key]).val();
//         if(currElm == ){

//         }
//     }
// }

function removeErrorClass(formMap) {
    for (var key in formMap) {
        var currElm = "#" + formMap[key];
        var currElmDom = $(currElm);
        if (currElmDom.hasClass("error")) {
            currElmDom.removeClass("error");
        }
    }
}

function checkboxCheked(){
    return checkboxChecked;
}

function validateEmail(email){
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function validateSpace(string){
    var stringRegex = /^\S+$/;
    return stringRegex.test(string)
}

$(".styled-checkbox").click(function() {
  if ($(this).is(":checked")) {
    checkboxChecked = true;
  }else{
    checkboxChecked = false;
  }
});