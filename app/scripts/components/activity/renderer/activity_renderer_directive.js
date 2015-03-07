(function(){
  var app = angular.module('ms.components.activity.renderer');
  app.directive('msActivityRenderer', [function(){
    return{
      scope: {
         
      },
      replace: true,
      controllerAs: 'activityRendererCtrl',
      templateUrl: 'app/scripts/components/activity/renderer/template.html',
      controller: 'ActivityRendererController'
    }; 
  }]); 

}());
