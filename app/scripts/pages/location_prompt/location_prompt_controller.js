(function() {
  function Controller($scope, Session, $location){
    function init() {
      $scope.masterCtrl.setBodyId('page-location-prompt');
      $scope.currentUser = Session.currentUser;
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