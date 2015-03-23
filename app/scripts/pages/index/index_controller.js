(function() {
  function Controller($scope, Session, $location, Activity){
    function init() {
      $scope.masterCtrl.setBodyId('page-index');
      $scope.connected = connected;
      $scope.unauthorized = unauthorized;
      $scope.unknown = unknown;
    };

    function connected(response) {
      Session.signIn(response.authResponse).then(afterSignIn);
    };

    function afterSignIn() {
      redirectToHome();
    };
    
    function redirectToHome() {
      $location.path('/home');
    };

    function unauthorized(response) {
      
    };

    function unknown(response) {
    };
    init();
  };
  angular.module('ms.pages.index').controller('IndexController', [
    '$scope',
    'SessionModel', 
    '$location',
    'ActivityModel',
    Controller
  ]);
}());