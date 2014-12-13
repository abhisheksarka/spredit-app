(function() {
  function Controller($scope){
    function init() {
      $scope.masterCtrl.setBodyId('page-home');
    };
    init();
  };
  angular.module('ms.pages.home').controller('HomeController', [
    '$scope',
    Controller
  ]);
}());