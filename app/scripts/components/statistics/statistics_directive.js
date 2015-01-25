(function(){
  var app = angular.module('ms.components.statistics');
  app.directive('msStatistics', [ function(){
    return {
      scope: {
        post: '='
      },
      replace: true,
      controllerAs: 'statisticsCtrl',
      templateUrl: 'app/scripts/components/statistics/template.html',
      controller: 'StatisticsController'
    }; 
  }]); 
}());
