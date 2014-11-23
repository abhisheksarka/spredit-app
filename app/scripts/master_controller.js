(function() {
  var app = angular.module("ms");
  app.controller("MasterController", 
  [ "$scope", "InitModel", "$q", function($scope, Init, $q){
    function init(){
      $scope.masterCtrl = {
        setBodyId: function(bodyId) {
          this.bodyId = bodyId;
        },
        getBodyId: function() {
          return this.bodyId;
        },
        setAppInitialized: function(bool) {
          this.appInitialized = bool;
        }
      };
      bootstrapApp();
    };

    function bootstrapApp() {
      return Init.get().$promise.then(function(){
        $scope.masterCtrl.setAppInitialized(true);
      });
    };

    init();

  }]);
}());