var commonFunctions = {
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    ajaxWithToken: function(params, url, type){
        if(type == 'post' || type == 'delete'){
            params = {};
        }else{
            params = JSON.stringify(params);
        }

    },
    ajaxWithoutToken: function(params, url, type){
        if(type == 'post' || type == 'delete'){
            params = {};
        }else{
            params = JSON.stringify(params);
        }
    }
}