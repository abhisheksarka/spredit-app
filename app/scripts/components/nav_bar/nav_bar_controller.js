(function(){
  function Controller($scope, Session, SideNavService, PostCreatorModalService){
    
    function init() {
      $scope.toggleSideNav = toggleSideNav;
      $scope.openPostCreator = openPostCreator;
    };

    function openPostCreator() {
      PostCreatorModalService.open();
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
