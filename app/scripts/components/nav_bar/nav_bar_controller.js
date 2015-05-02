(function(){
  function Controller($scope, Session, SideNavService, PostCreatorModal){
    
    function init() {
      $scope.toggleSideNav = toggleSideNav;
      $scope.openPostCreator = openPostCreator;
    };

    function openPostCreator() {
      PostCreatorModal.getInstance({
        windowClass: 'specialized',
        backdropClass: 'specialized'
      }).open();
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
    Controller 
  ]);
}());
