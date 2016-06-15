(function(){
  'use strict'

  angular.module('rateApp')
  .service('httpService',function($http){
    var th = this;

    th.getRateData = function (callback){
      $http({method: 'GET', url: '/getRateData/'}).
                then(
                        function (response) {
                            callback(response);
                        },
                        function (response) {
                          callback(response);
                        }
                );
    };



  });
})();
