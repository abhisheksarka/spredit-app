(function() {
  function Controller($scope, Session, Post, Activity){
    var postsPaginator;

    function init() {
      $scope.masterCtrl.setBodyId('page-me');
      $scope.Post = Post;
      $scope.Activity = Activity;

      $scope.currentUser = Session.currentUser;
      $scope.tabs = {
        myPosts: {
          value: 1,
          clearFn: initActivities
        },
        activities: {
          value: 2,
          clearFn: initPosts
        }
      };
      $scope.setActive = setActive;
      initPosts();
      initActivities();
    };

    function setActive(tab) {
      tab.clearFn();
      $scope.tabs.active = tab;
    };

    function initPosts() {
      $scope.myPosts = [ ];
    };

    function initActivities() {
      $scope.activities = [ ];
    };
    
    init();
  };
  angular.module('ms.pages.me').controller('MeController', [
    '$scope',
    'SessionModel',
    'PostModel',
    'ActivityModel',
    Controller
  ]);
}());