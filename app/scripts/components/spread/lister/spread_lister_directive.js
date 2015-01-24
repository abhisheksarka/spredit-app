(function(){
  var app = angular.module('ms.components.spread.lister');
  app.directive('msSpreadLister', [function(){
    return{
      scope: {
        spreadable: "=" 
      },
      replace: true,
      controllerAs: 'spreadListerCtrl',
      templateUrl: 'app/scripts/components/spread/lister/template.html',
      controller: 'SpreadListerController'
    }; 
  }]); 

}());
