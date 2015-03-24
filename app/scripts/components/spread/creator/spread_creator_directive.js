(function(){
  var app = angular.module('ms.components.spread.creator');
  app.directive('msSpreadCreator', [function(){
    return{
      scope: {
        spreadable: '=',
        type: '=?',
        resourceOwner: '=?',
        isDisabled: '='
      },
      replace: true,
      controllerAs: 'spreadCreatorCtrl',
      templateUrl: 'app/scripts/components/spread/creator/template.html',
      controller: 'SpreadCreatorController'
    }; 
  }]); 

}());
