(function() {
  function Controller($scope, Session){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.masterCtrl.setBodyId('page-home');
    };
    init();
  };
  angular.module('ms.pages.home').controller('HomeController', [
    '$scope',
    'SessionModel',
    Controller
  ]);
}());