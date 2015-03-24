(function() {
  function Controller($scope, Session, Activity){
    var postsPaginator;

    function init() {
      $scope.masterCtrl.setBodyId('page-notifications');
      $scope.masterCtrl.setTitle('Notifications');
      $scope.currentUser = Session.currentUser;
      $scope.Activity = Activity;   
      initNotifications();
    };

    function initNotifications() {
      $scope.notifications = [ ];
    };

    function clearNotifications() {
      var c = Session.currentUser;
      if(c.unread_notifications_count == 0) {
        return;
      };
      Activity.markAllAsRead()
      .$promise
      .then(function(){
        c.unread_notifications_count = 0;
      }); 
    };

    init();
    clearNotifications();
  };
  angular.module('ms.pages.notifications').controller('NotificationsController', [
    '$scope',
    'SessionModel',
    'ActivityModel',
    Controller
  ]);
}());