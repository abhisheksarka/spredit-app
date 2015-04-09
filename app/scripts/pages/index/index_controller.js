(function() {
  function Controller($scope, Session, $location, Activity, StateHandler){
    function init() {
      $scope.masterCtrl.setBodyId('page-index');
      $scope.connected = connected;
      $scope.unauthorized = unauthorized;
      $scope.unknown = unknown;
      $scope.loginState = StateHandler.getInstance();
    };

    function connected(response) {
      $scope.loginState.initiate();
      Session.signIn(response.authResponse).then(afterSignIn, $scope.loginState.error);
    };

    function afterSignIn() {
      $scope.loginState.success();
      redirectToHome();
    };
    
    function redirectToHome() {
      $location.path('/home');
    };

    function unauthorized(response) {
      $scope.loginState.success();
    };

    function unknown(response) {
      $scope.loginState.success();
    };
    init();
  };
  angular.module('ms.pages.index').controller('IndexController', [
    '$scope',
    'SessionModel', 
    '$location',
    'ActivityModel',
    'StateHandlerService',
    Controller
  ]);
}());