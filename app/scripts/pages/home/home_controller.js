(function() {
  function Controller($scope, $rootScope, Session, Spread, $timeout, MappingsService){
    var currentIndex;

    function init() {
      currentIndex = -1;
      
      $scope.currentUser = Session.currentUser;
      $scope.masterCtrl.setBodyId('page-home');
      $scope.spreads = Spread.query();
      $scope.spreads.$promise.then(function(){
        nextPost();
      });
      $scope.actions = {
        selected: 'comments'
      };
    };

    function nextPost() {
      var c = $scope.spreads[currentIndex + 1];
      if(c) {
        $scope.currentPost = c.spreadable;
        currentIndex++;
      };
    };

    function mappings() {
      return MappingsService;
    };

    $scope.$watch('actions.selected', function(nv, ov) {
      $scope.currentMapping = mappings()[nv];
    });

    $scope.$on('event.spreader.action', function(event, response, type){
      nextPost();
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