(function(){
  function Controller($scope, Session, $modalInstance, $rootScope){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.success = success;
      $scope.error = error;
      $scope.close = close;
    };
    
    function success(response) {
      close();
      $rootScope.$broadcast('ms.events.flash', {
        message: 'Your post was successfully published.',
        type: 'success' 
      });
    };

    function error() { };

    function close() {
      $modalInstance.dismiss('cancel');
    };

    init();
  };

  angular.module('ms.components.post.creatorModal')
  .controller('PostCreatorModalController', [
    '$scope',  
    'SessionModel',
    '$modalInstance',
    '$rootScope',
    Controller 
  ]);
}());
