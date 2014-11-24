(function() {
  function Controller($scope){
    function init() {
      $scope.masterCtrl.setBodyId('page-index');
      $scope.connected = connected;
      $scope.unauthorized = unauthorized;
      $scope.unknown = unknown;
    };

    function connected(response) {
      
    };
    
    function unauthorized(response) {
      
    };

    function unknown(response) {
    };
    init();
  };
  angular.module('ms.pages.index').controller('IndexController', ['$scope', Controller]);
}());