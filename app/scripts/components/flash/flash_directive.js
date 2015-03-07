(function(){
  var app = angular.module('ms.components.flash');
  app.directive('msFlash', [function(){
    return{
      scope: { },
      replace: true,
      controllerAs: 'flashCtrl',
      templateUrl: 'app/scripts/components/flash/template.html',
      controller: 'FlashController'
    }; 
  }]); 

}());
