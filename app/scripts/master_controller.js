(function() {
  var app = angular.module("ms");
  app.controller("MasterController", 
  [ "$scope", "InitModel", "$q", "$window", function($scope, Init, $q, $window){
    function init(){
      $scope.masterCtrl = {
        setBodyId: function(bodyId) {
          this.bodyId = bodyId;
        },
        getBodyId: function() {
          return this.bodyId;
        },
        config: $window.ms.config
      };
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

  }]);
}());