(function(){
  function Controller($scope, $window, FbSdkService, Session, StateHandler){
    function init() {
      FbSdkService.init();
      $scope.login = login;
      $scope.reqState = StateHandler.getInstance();
    };
    function login() {
      var req = $scope.reqState;
      req.initiate();

      FbSdkService.login().connected(function(response){
        req.success();
        $scope.connected({response: response});
      }).unauthorized(function(response){
        req.success();
        $scope.unauthorized({response: response});
      }).unknown(function(response){
        req.success();
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
    'StateHandlerService',
    Controller 
  ]);
}());
