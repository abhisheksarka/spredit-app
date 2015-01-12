(function(){
  var app = angular.module('ms.components.post.actions');
  app.directive('msPostActions', [function(){
    return{
      scope: {
        post: '=',
        selectedAction: '=' 
      },
      replace: true,
      controllerAs: 'postActionsCtrl',
      templateUrl: 'app/scripts/components/post/actions/template.html',
      controller: 'PostActionsController'
    }; 
  }]); 

}());
