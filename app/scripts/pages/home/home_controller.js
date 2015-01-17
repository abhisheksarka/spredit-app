(function() {
  function Controller($scope, $rootScope, Session, Spread, $timeout, MappingsService){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.masterCtrl.setBodyId('page-home');
      $scope.spreads = Spread.query();
      $scope.spreads.$promise.then(function(){
        $scope.currentPost = $scope.spreads[0].spreadable;
      });
      $scope.actions = {
        selected: 'comments'
      };
    };

    function mappings() {
      return MappingsService;
    };

    $scope.$watch('actions.selected', function(nv, ov) {
      $scope.currentMapping = mappings()[nv];
    });

    $scope.$on('event.spreader.action', function(event, response, type){
      $scope.currentPost = $scope.spreads[1].spreadable;
    });

    init();
  };
  angular.module('ms.pages.home').controller('HomeController', [
    '$scope',
    '$rootScope',
    'SessionModel',
    'SpreadModel',
    '$timeout',
    'HomeMappingsService',
    Controller
  ]);
}());