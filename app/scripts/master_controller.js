(function() {
  function Controller($scope, Init, Session, $q, $window, $rootScope){
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
        $scope.masterCtrl.currentSession = Session.isSignedIn();
      }); 
      bootstrapApp();
    };

    function bootstrapApp() {
      return Init.get().$promise.then(onBootstrapped);
    };

    function onBootstrapped(response) {
      $window.ms.config.APP_INIT = true;
      setFbApiId(response.app_id); 
      setFbPermissions(response.permissions_scope);
    };

    function setFbApiId(apiId) {
      $window.ms.config.FB_APP_ID = apiId;
    };

    function setFbPermissions(permissions) {
      $window.ms.config.FB_PERMISSIONS_SCOPE = permissions;
    };

    init();
  };
  
  angular.module('ms')
  .controller('MasterController', [ 
    '$scope', 
    'InitModel',
    'SessionModel', 
    '$q', 
    '$window', 
    '$rootScope',
    Controller
  ]);
}());