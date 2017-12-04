(function () {
   "use strict";
   angular.module('core')

       .factory('ServerRequest', ServerRequest);

   function ServerRequest($http, $q, $localStorage, $sessionStorage) {

        var API_URL = 'http://localhost:3000/api/';
       //var API_URL     = '/app/api/'
       // var UPLOAD_URL  = 'http://localhost:3000/api/'
       // var UPLOAD_URL  = 'https://fileuploaderbackend.herokuapp.com/api/'

       var headers = {
           'x-access-token': $sessionStorage.token || ''
       };

       return {

           // Get news stuff
           getAPNews                               : getAPNews,

       };


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////// Auth

       function getAPNews(dataObj){
           return httpPOST("v1/getAPNews", dataObj)
       }


       function httpPOST(url, dataObj, method) {
           if (!dataObj) {
               dataObj = { params: {}, token: '' }
           }
           if ($sessionStorage.token){ dataObj['token'] = $sessionStorage.token }

           return $q(function(resolve, reject) {
               $http({
                   url: encodeURI(API_URL + url),
                   method: 'POST',
                   headers: headers,
                   data: dataObj
               })
               .then(function(response) {
                   resolve(response.data);
               },
               function(response) {
                   reject(response.data);
               });
           })
       }
   }
}());
