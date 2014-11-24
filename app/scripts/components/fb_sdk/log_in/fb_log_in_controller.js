(function(){
  function Controller($scope, $window, FbSdkService, Session){
    function init() {
      FbSdkService.init();
      $scope.login = login;
    };
    function login() {
      FbSdkService.login().connected(function(response){
        $scope.connected({response: response});
      }).unauthorized(function(response){
        $scope.unauthorized({response: response});
      }).unknown(function(response){
        $scope.unknown({response: response})
      });
    };
    init();
  };
  
  angular.module('ms.components.fbSdk.logIn')
  .controller('FbLogInController', ['$scope', 
    '$location', 
    'FbSdkService',
    'SessionModel', 
    Controller 
  ]);
}());
