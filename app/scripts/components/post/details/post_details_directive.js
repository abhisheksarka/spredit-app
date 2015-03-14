(function(){
  var app = angular.module('ms.components.post.details');
  app.directive('msPostDetails', [function(){
    return{
      scope: { 
        post: '=',
        action: '='
      },
      replace: true,
      controllerAs: 'postDetailsCtrl',
      templateUrl: 'app/scripts/components/post/details/template.html',
      controller: 'PostDetailsController'
    }; 
  }]); 

}());
