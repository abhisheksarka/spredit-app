(function() {
  function Controller($scope, Session, Post, Activity){
    var postsPaginator;

    function init() {
      $scope.masterCtrl.checkLocation();
      $scope.masterCtrl.setBodyId('page-me');
      $scope.masterCtrl.setTitle('Me');
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
        },
        notifications: {
          value: 3,
          clearFn: initNotifications
        }
      };
      $scope.setActive = setActive;
      initPosts();
      initActivities();
      initNotifications();
    };

    function setActive(tab) {
      tab.clearFn();
      $scope.tabs.active = tab;
    };

    function initPosts() {
      $scope.myPosts = [ ];
    };

    function initActivities() {
      $scope.myActivities = [ ];
    };

    function initNotifications() {
      $scope.myNotifications = [ ];
    };

    function clearNotifications() {
      var c = $scope.currentUser;
      if(c.unread_notifications_count == 0) {
        return;
      };
      Activity.markAllAsRead()
      .$promise
      .then(function(){
        c.unread_notifications_count = 0;
      }); 
    };

    $scope.$watchCollection('myNotifications', function(nv, ov) {
      if(nv.length > 0) {
        clearNotifications();
      };
    });

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