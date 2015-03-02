(function() {
  function Controller($scope, Session, Post, StateHandler, Paginator){
    var postsPaginator;

    function init() {
      $scope.masterCtrl.setBodyId('page-me');
      $scope.Post = Post;
      $scope.myPosts = [ ];
      $scope.activities = [ ];
      $scope.currentUser = Session.currentUser;
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