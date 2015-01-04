(function(){
  function Controller($scope, Session, CreateBoxModalService, SideNavService){
    function init() {
      $scope.openCreateBox = openCreateBox;
    };
    
    function openCreateBox() {
      CreateBoxModalService.open();
    };

    init();
  };

  angular.module('ms.components.sideNav')
  .controller('SideNavController', [
    '$scope',  
    'SessionModel',
    'CreateBoxModalService',
    'SideNavService',
    Controller 
  ]);
}());
