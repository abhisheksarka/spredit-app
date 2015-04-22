(function(){
  function Controller($scope, $modalInstance, templateUrl, afterClose, $templateCache){
    function init() {
      $scope.template = $templateCache.get(templateUrl);
      $scope.close = close;
      afterClose = afterClose || angular.noop;
    };

    function close() {
      $modalInstance.dismiss('cancel');
      afterClose();
    };

    init();
  };

  angular.module('ms.components.dialog')
  .controller('DialogController', [
    '$scope',  
    '$modalInstance',
    'templateUrl',
    'afterClose',
    '$templateCache',
    Controller 
  ]);
}());
