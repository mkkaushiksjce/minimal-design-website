var commonFunctions = {
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    ajaxWithToken: function (params, url, type) {
        if (type == 'post' || type == 'delete') {
            params = {};
        } else {
            params = JSON.stringify(params);
        }

    },
    //ajax call with token in the header
    ajaxWithoutToken: function (type, apiUrl, paramData) {
        // jquery promise object
        var promiseObj = $.Deferred();
        $.support.cors = true;
        // only POST type has params
        if (type == 'GET' || (type == 'Delete' && !paramData)) {
            paramData = {};
        }
        $.ajax({
            type: type,
            contentType: "application/json",
            crossDomain: true,
            url: apiUrl,
            data: JSON.stringify(paramData),
            success: function (successData) {
                promiseObj.resolve(successData.data);
            },
            error: function (errorData) {
                promiseObj.reject(errorData);
            }
        });
        return promiseObj;
    }
}