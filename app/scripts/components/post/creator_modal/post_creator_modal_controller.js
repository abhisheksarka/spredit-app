(function(){
  function Controller($scope, Session){
    function init() {
      $scope.currentUser = Session.currentUser;
    };
  
    init();
  };

  angular.module('ms.components.post.creatorModal')
  .controller('PostCreatorModalController', [
    '$scope',  
    'SessionModel',
    Controller 
  ]);
}());
