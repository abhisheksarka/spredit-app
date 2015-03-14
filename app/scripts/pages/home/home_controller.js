(function() {
  function Controller($scope, $rootScope, Session, Post, $timeout, StateHandler, PostCreatorModalService){
    var currentIndex;

    function init() {
      currentIndex = -1;
      $scope.currentUser = Session.currentUser;
      $scope.masterCtrl.setBodyId('page-home');
      $scope.posts = Post.query();
      $scope.loadState = StateHandler.getInstance();
      $scope.loadState.initiate();
      $scope.posts.$promise.then(function(){
        nextPost();
        $scope.loadState.success();
      });
      $scope.actions = {
        selected: ''
      };
      $scope.openPostCreator = openPostCreator;
    };

    function openPostCreator() {
      PostCreatorModalService.open();
    };

    function nextPost() {
      var c = $scope.posts[currentIndex + 1];
      if(c) {
        $scope.currentPost = c;
        currentIndex++;
      } else {
        $scope.currentPost = null;
      }
    };

    $scope.$on('event.spreader.action', function(event, response, type){
      nextPost();
    });

    init();
  };
  angular.module('ms.pages.home').controller('HomeController', [
    '$scope',
    '$rootScope',
    'SessionModel',
    'PostModel',
    '$timeout',
    'StateHandlerService',
    'PostCreatorModalService',
    Controller
  ]);
}());