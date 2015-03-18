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
    
    init();
  };
  angular.module('ms.pages.notifications').controller('NotificationsController', [
    '$scope',
    'SessionModel',
    'ActivityModel',
    Controller
  ]);
}());