(function() {
  var app = angular.module('ms.pages.index');
  app.controller('IndexController', [ '$scope', function($scope){
    $scope.masterCtrl.setBodyId("page-index");
  }]);
}());