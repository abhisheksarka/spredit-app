(function() {
  function Controller($scope, Init, Session, Location, $q, $window, $rootScope, $cookies){
    function init(){
      // some shared states
      $scope.masterCtrl = {
        setBodyId: function(bodyId) {
          this.bodyId = bodyId;
        },
        getBodyId: function() {
          return this.bodyId;
        },
        config: $window.ms.config
      };

      // check current session
      $rootScope.$on('$routeChangeStart', function(event){
        var c = Session.currentUser, l;
        if(c) {
          l = c.location;
        };

        $scope.masterCtrl.currentSession = Session.isSignedIn();
        $scope.masterCtrl.isLocationPresent = new Location(l).isValid();
      }); 
      runSetUp();
    };

    function runSetUp() {
      var initPromise = Init.get().$promise.then(setFb),
          sessionPromise = Session.current().$promise.then(setSession);
      $q.all([initPromise, sessionPromise]).then(start);
    };

    function setFb(response) {
      $window.ms.config.FB_APP_ID = response.app_id;
      $window.ms.config.FB_PERMISSIONS_SCOPE = response.permissions_scope;
    };

    function setSession(response) {
      if(!response.id) {
        return;
      };
      Session.setAuthProperties(response);
    }

    function start() {
      $window.ms.config.APP_INIT = true;
    };

    init();
  };
  
  angular.module('ms')
  .controller('MasterController', [ 
    '$scope', 
    'InitModel',
    'SessionModel', 
    'LocationModel',
    '$q', 
    '$window', 
    '$rootScope',
    '$cookies',
    Controller
  ]);
}());