(function() {
  function Controller($scope, Session){
    function init() {
      $scope.masterCtrl.setBodyId('page-current-location');
    };

    init();
  };
  angular.module('ms.pages.currentLocation').controller('CurrentLocationController', [
    '$scope',
    'SessionModel',
    Controller
  ]);
}());