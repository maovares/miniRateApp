(function(){
  'use strict'

  angular.module('rateApp',[
    'ui.router'
  ]);

  angular.module('rateApp')
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/rate');
    $stateProvider
      .state('rate',{
        url:'/rate',
        templateUrl:'app/rate/rate.html',
        controller:'RateController',
        controllerAs:'rate'
      });


  });

})();
