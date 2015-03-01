(function() {
  function Controller($scope, Session, Post, StateHandler, Paginator){
    var postsPaginator;

    function init() {
      $scope.masterCtrl.setBodyId('page-me');
      $scope.myPosts = [ ];
      $scope.paginationFn = Paginator.getInstance(Post, 'mine').on($scope.myPosts).paginate;
      $scope.currentUser = Session.currentUser;
      $scope.states = {
        posts: StateHandler.getInstance(),
        activities: StateHandler.getInstance()
      }; 
      loadMyPosts();
    };

    function loadMyPosts() {
      var ps = $scope.states.posts;
      ps.initiate();
      $scope.paginationFn();
    };

    function loadActivity() {

    };
    
    init();
  };
  angular.module('ms.pages.me').controller('MeController', [
    '$scope',
    'SessionModel',
    'PostModel',
    'StateHandlerService',
    'PaginatorService',
    Controller
  ]);
}());