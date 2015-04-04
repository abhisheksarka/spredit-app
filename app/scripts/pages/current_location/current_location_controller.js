(function() {
  function Controller($scope, Session){
    function init() {
      $scope.masterCtrl.checkLocation();
      $scope.masterCtrl.setBodyId('page-current-location');
      $scope.masterCtrl.setTitle('My Location');
    };

    init();
  };
  angular.module('ms.pages.currentLocation').controller('CurrentLocationController', [
    '$scope',
    'SessionModel',
    Controller
  ]);
}());