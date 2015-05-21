(function(){
  function Controller($scope, Session, SideNavService, PostCreatorModal, $window, $location){
    
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.toggleSideNav = toggleSideNav;
      $scope.signOut = signOut;
      $scope.openPostCreator = openPostCreator;
      $scope.location = $location;
    };

    function openPostCreator() {
      PostCreatorModal.getInstance({
        windowClass: 'specialized',
        backdropClass: 'specialized'
      }).open();
    };

    function signOut() {
      Session.signOut()
      .then(function(){
        $location.path('/');
        $window.location.reload();
      });
    };

    function toggleSideNav() {
      SideNavService.toggle();
    };

    init();
  };

  angular.module('ms.components.navBar')
  .controller('NavBarController', [
    '$scope',  
    'SessionModel',
    'SideNavService',
    'PostCreatorModalService',
    '$window',
    '$location',
    Controller 
  ]);
}());
