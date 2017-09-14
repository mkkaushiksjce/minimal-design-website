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
var messageTimeDelay = 5000;

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
            };
            displayLoader();
            apiService.sendMail(params).then(function (successData) {
                removeLoader();
                clearFields(formMap);
                handleSuccess(successData);
            }, function (errorData) {
                removeLoader();
                clearFields(formMap);
                handleError(errorData);
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

function clearFields(formMap){
    for (var key in formMap) {
        var currElm = "#" + formMap[key];
        var currElmDom = $(currElm);
        currElmDom.val("");
    }
    uncheckAll("captcha-wrap");
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

function handleSuccess(successData){
    removeErrorClass(formMap);
    $(".ajax-message").html(successData.message).css('display', 'block');
    window.setTimeout(function(){
        $(".ajax-message").css('display', 'none');
    }, messageTimeDelay);
}

function handleError(errorData){
    removeErrorClass(formMap);
    var errorMessage = "Please try after some time"
    $(".ajax-message").html(errorMessage).css('display', 'block');
    window.setTimeout(function(){
        $(".ajax-message").css('display', 'none');
    }, messageTimeDelay);
}

function displayLoader(){
    $(".ajax-loader").css('display', 'block');
    
}

function removeLoader(){
    $(".ajax-loader").css('display', 'none');
    
}

function uncheckAll(divid) {
    var checks = document.querySelectorAll('.' + divid + ' input[type="checkbox"]');
    for(var i =0; i< checks.length;i++){
        var check = checks[i];
        if(!check.disabled){
            check.checked = false;
        }
    }
}

$(".styled-checkbox").click(function() {
  if ($(this).is(":checked")) {
    checkboxChecked = true;
  }else{
    checkboxChecked = false;
  }
});