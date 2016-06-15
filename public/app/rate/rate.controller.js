(function(){
  'use strict'

  angular.module('rateApp')
    .controller('RateController',function(RateService){
      var th = this;
      th.rates = {};

      var getRateData = function(callback){
        RateService.getRateData(function(response){
            th.rates = response.data;
            callback();
        });
      };

      th.refresh = function(){
                  setInterval(function(){
                      getRateData(function(){

                      });
                  },5000)
          };

      th.refresh();


    });
})();
