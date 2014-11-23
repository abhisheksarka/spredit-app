(function(){
  function Controller($scope, $window, FbSdkService, Session){
    function init() {
      FbSdkService.init();
      $scope.login = login;
    };
    function login() {
      FbSdkService.login().connected(function(response){
        
      }).unauthorized(function(response){

      }).unknown(function(){

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
