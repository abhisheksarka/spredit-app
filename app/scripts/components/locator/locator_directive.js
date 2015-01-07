(function(){
  var app = angular.module('ms.components.locator');
  app.directive('msLocator', [function(){
    return{
      scope: { 
        successCallback: '&',
        errorCallback: '&',
        label: '=?',
        btnClass: '=?'
      },
      replace: true,
      templateUrl: 'app/scripts/components/locator/template.html',
      controller: 'LocatorController'
    }; 
  }]); 

}());
