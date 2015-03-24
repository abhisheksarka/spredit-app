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
    // when the first pagination request is complete, we know that the user has view the first
    // set of notifications, so we mark all notificaitions as read
    $scope.$watch('notificationsPaginator.isComplete', function(nv, ov){
      if(nv) {
        var p = $scope.notificationsPaginator;
        if(p.page == 1) {
          Activity
          .markAllAsRead()
          .$promise
          .then(function(){
            Session.currentUser.unread_notifications_count = 0;
          });
        };
      }
    });
    
    init();
  };
  angular.module('ms.pages.notifications').controller('NotificationsController', [
    '$scope',
    'SessionModel',
    'ActivityModel',
    Controller
  ]);
}());