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
        setTitle: function(title) {
          this.title = 'Spredit';
          if(title) {
            this.title = this.title + ' | ' + title;
          };
        },
        getTitle: function() {
          return this.title;
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