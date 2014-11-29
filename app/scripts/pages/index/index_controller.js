(function() {
  function Controller($scope, Session){
    function init() {
      $scope.masterCtrl.setBodyId('page-index');
      $scope.connected = connected;
      $scope.unauthorized = unauthorized;
      $scope.unknown = unknown;
    };

    function connected(response) {
      Session.save(response.authResponse);
    };
    
    function unauthorized(response) {
      
    };

    function unknown(response) {
    };
    init();
  };
  angular.module('ms.pages.index').controller('IndexController', [
    '$scope',
    'SessionModel', 
    Controller
  ]);
}());