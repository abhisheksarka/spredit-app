(function() {
  function Controller($scope, $rootScope, Session, Spread, $timeout, MappingsService, StateHandler, PostCreatorModalService){
    var currentIndex;

    function init() {
      currentIndex = -1;
      
      $scope.currentUser = Session.currentUser;
      $scope.masterCtrl.setBodyId('page-home');
      $scope.spreads = Spread.query();
      $scope.loadState = StateHandler.getInstance();
      $scope.loadState.initiate();
      $scope.spreads.$promise.then(function(){
        nextPost();
        $scope.loadState.success();
      });
      $scope.actions = {
        selected: 'comments'
      };
      $scope.openPostCreator = openPostCreator;
    };

    function openPostCreator() {
      PostCreatorModalService.open();
    };

    function nextPost() {
      var c = $scope.spreads[currentIndex + 1];
      if(c) {
        $scope.currentPost = c.spreadable;
        currentIndex++;
      } else {
        $scope.currentPost = null;
      }
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
    'StateHandlerService',
    'PostCreatorModalService',
    Controller
  ]);
}());