(function() {
  function Controller($scope, Session){
    function init() {
      $scope.masterCtrl.setBodyId('page-me');
      $scope.currentUser = Session.currentUser;
    };
    
    init();
  };
  angular.module('ms.pages.me').controller('MeController', [
    '$scope',
    'SessionModel',
    Controller
  ]);
}());