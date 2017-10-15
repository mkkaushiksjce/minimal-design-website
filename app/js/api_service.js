var apiService = {
    sendMail: function(params){
        var url = apis['sendMail'];
        var promiseObj = $.Deferred(); 
        commonFunctions.ajaxWithoutToken('POST', url, params).then(function(successData){
            promiseObj.resolve(successData);
        }, function(errorData){
            promiseObj.reject(errorData);
        });
        return promiseObj;
    }
}