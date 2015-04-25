(function() {
  function Controller($scope){
    
    function init() {
      $scope.masterCtrl.setBodyId('page-policies');
      $scope.masterCtrl.setTitle('Policies');
    };

    init();
  };
  angular.module('ms.pages.policies')
  .controller('PoliciesController', [
    '$scope',
    Controller
  ]);
}());