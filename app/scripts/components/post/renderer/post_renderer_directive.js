(function(){
  var app = angular.module('ms.components.post.renderer');
  app.directive('msPostRenderer', [function(){
    return{
      scope: {
        post: '=',
        selectedAction: '=?',
        recordView: '=?',
        showAllActions: '='
      },
      replace: true,
      controllerAs: 'postRendererCtrl',
      templateUrl: 'app/scripts/components/post/renderer/template.html',
      controller: 'PostRendererController'
    }; 
  }]); 

}());
