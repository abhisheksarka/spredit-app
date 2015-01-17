(function(){
  var app = angular.module('ms.components.propagation');
  app.directive('msPropagation', [function(){
    return{
      scope: {
        post: '=' 
      },
      replace: true,
      controllerAs: 'propagationCtrl',
      templateUrl: 'app/scripts/components/propagation/template.html',
      controller: 'PropagationController'
    }; 
  }]); 

}());
