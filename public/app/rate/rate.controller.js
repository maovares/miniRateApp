(function(){
  'use strict'

  angular.module('rateApp')
    .controller('RateController',function(RateService){
      var th = this;
        th.rates = [
            {
                date: "yesterday",
                rate: 3
            },
            {
                date: "yesterday",
                rate: 5
            },
            {
                date: "today",
                rate: 2
            },
            {
                date: "today",
                rate: 1
            },
            {
                date: "tomorrow",
                rate: 5
            }
        ];

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
        th.range = function(n) {
            var array = new Array();
            for (var i = 0; i < n; i++){
                array.push({dummyData: i})
            }
            return array;
        };

      //th.refresh();


    });
})();
