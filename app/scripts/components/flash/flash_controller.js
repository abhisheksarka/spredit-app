(function(){
  function Controller($scope, $rootScope, $timeout){
    var defaultTimeout = 2500;

    function init() {
      $scope.messages = [ ];  
      $scope.iconMapping = {
        info: {
          iconClass: 'glyphicon-info-sign',
          colorClass: 'text-info'
        },
        success: {
          iconClass: 'glyphicon-ok-sign',
          colorClass: 'text-success'
        },
        danger: {
          iconClass: 'glyphicon-remove-sign',
          colorClass: 'text-danger'
        }
      };
    };

    function pushMessage(message, t) {
      $scope.messages[0] = message;
      $timeout(function() {
        $scope.messages.shift();
      }, t, true);
    };

    $scope.$on('ms.events.flash', function(e, flashConfig) {
      $scope.flashType = flashConfig.type || 'info';
      pushMessage(flashConfig.message, (flashConfig.timeout || defaultTimeout));
    });

    init();
  };

  angular.module('ms.components.flash')
  .controller('FlashController', [
    '$scope',  
    '$rootScope',
    '$timeout',
    Controller 
  ]);
}());
