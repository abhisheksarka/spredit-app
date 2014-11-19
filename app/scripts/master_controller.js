(function() {
  var app = angular.module("ms");
  app.controller("MasterController", [ "$scope", function($scope){
    $scope.masterCtrl = {
      setBodyId: function(bodyId){
        this.bodyId = bodyId;
      },
      getBodyId: function() {
        return this.bodyId;
      }
    };

  }]);
}());