(function(){
  function Controller($scope, Session, SideNavService){
    function init() {
      $scope.toggleSideNav = toggleSideNav;
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
    Controller 
  ]);
}());
