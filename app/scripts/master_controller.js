(function() {
  function Controller($scope, Session, Location, $window, $rootScope, $location){
    function init(){
      $scope.masterCtrl = {
        setBodyId: function(bodyId) {
          this.bodyId = bodyId;
        },
        getBodyId: function() {
          return this.bodyId;
        },
        config: $window.ms.config,
        session: Session
      };
    };

    init();
  };
  
  angular.module('ms')
  .controller('MasterController', [ 
    '$scope', 
    'SessionModel', 
    'LocationModel',
    '$window', 
    '$rootScope',
    '$location',
    Controller
  ]);
}());