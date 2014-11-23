(function(){
  function Controller($scope, $window, FbSdkService){
    
    function init() {
      FbSdkService.init();
      $scope.login = login;
    };

    function login() {
      FbSdkService.login().connected(connected).unauthorized(unauthorized).unknown(unknown);
    };

    function connected() {
      alert("connected");
    };

    function unauthorized() {
      alert("unauthorized");
    };

    function unknown() {
      alert("unknown");
    };

    init();
  };
  angular.module('ms.components.fbLogIn')
  .controller('FbLogInController', [ '$scope', '$location', 'FbSdkService', Controller]);
}());
