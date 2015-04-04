(function() {
  function Controller($scope, Session, $location){
    function init() {
      $scope.masterCtrl.setBodyId('page-location-prompt');
      $scope.masterCtrl.setTitle('Location Required');
      $scope.currentUser = Session.currentUser;
      $scope.redirectToHome = redirectToHome;
      redirectToHome();
    };

    function redirectToHome() {
      if ($scope.currentUser.location.isValid()) {
        $location.path('/home');
      };
    };
    
    init();
  };
  angular.module('ms.pages.locationPrompt').controller('LocationPromptController', [
    '$scope',
    'SessionModel', 
    '$location',
    Controller
  ]);
}());