(function(){
  var app = angular.module('ms.components.locator.map');
  app.directive('msLocatorMap', [function(){
    return{
      scope: { },
      templateUrl: 'app/scripts/components/locator/map/template.html',
      controller: 'LocatorMapController'
    }; 
  }]); 

}());
