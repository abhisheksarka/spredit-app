(function() {
  function Controller($scope, Session, CreateBoxModalService){
    function init() {
      $scope.masterCtrl.setBodyId('page-home');
      $scope.open = function() {
        CreateBoxModalService.open(); 
      };
    };
    init();
  };
  angular.module('ms.pages.home').controller('HomeController', [
    '$scope',
    'SessionModel',
    'CreateBoxModalService',
    Controller
  ]);
}());