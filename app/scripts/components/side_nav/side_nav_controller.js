(function(){
  function Controller($scope, Session, SideNavService, $window, $location){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.signOut = signOut;
    };
    
    function signOut() {
      Session.signOut()
      .then(function(){
        $location.path('/');
        $window.location.reload();
      });
    };

    init();
  };

  angular.module('ms.components.sideNav')
  .controller('SideNavController', [
    '$scope',  
    'SessionModel',
    'SideNavService',
    '$window',
    '$location',
    Controller 
  ]);
}());
