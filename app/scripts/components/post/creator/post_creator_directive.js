(function(){
  var app = angular.module('ms.components.post.creator');
  app.directive('msPostCreator', [function(){
    return{
      scope: { },
      replace: true,
      controllerAs: 'postCreatorCtrl',
      templateUrl: 'app/scripts/components/post/creator/template.html',
      controller: 'PostCreatorController'
    }; 
  }]); 

}());
