(function(){
  'use strict'

  angular.module('rateApp')
  .service('RateService',function(httpService){
    var th = this;

    th.getRateData = function(callback){
      httpService.getRateData(function(response){
        callback(response);
      });
    };


  });
})();
