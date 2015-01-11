(function(){
  function Controller($scope, Session, SideNavService){
    function init() {
      $scope.currentUser = Session.currentUser;
    };
  
    init();
  };

  angular.module('ms.components.sideNav')
  .controller('SideNavController', [
    '$scope',  
    'SessionModel',
    'SideNavService',
    Controller 
  ]);
}());
