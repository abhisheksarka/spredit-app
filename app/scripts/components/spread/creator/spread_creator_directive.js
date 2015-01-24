(function(){
  var app = angular.module('ms.components.spread.creator');
  app.directive('msSpreadCreator', [function(){
    return{
      scope: {
        spreadable: '=',
        type: '=?',
      },
      replace: true,
      controllerAs: 'spreadCreatorCtrl',
      templateUrl: 'app/scripts/components/spread/creator/template.html',
      controller: 'SpreadCreatorController'
    }; 
  }]); 

}());
