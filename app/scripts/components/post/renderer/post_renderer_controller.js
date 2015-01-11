(function(){
  function Controller($scope, Session, Post){
    function init() {
      $scope.currentUser = Session.currentUser;
    };
  
    init();
  };

  angular.module('ms.components.post.renderer')
  .controller('PostRendererController', [
    '$scope',  
    'SessionModel',
    'PostModel',
    Controller 
  ]);
}());
