(function() {
  function Controller($scope, Session, $location){
    function init() {
      $scope.masterCtrl.setBodyId('page-location-prompt');
      $scope.masterCtrl.setTitle('Location Required');
      $scope.currentUser = Session.currentUser;
      $scope.redirectToHome = redirectToHome;
      $scope.afterLocationSet = afterLocationSet;
      redirectToHome();
    };

    function redirectToHome() {
      if ($scope.currentUser.location.isValid()) {
        $location.path('/home');
      };
    };

    function afterLocationSet(response) {
      $location.path('/home');
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