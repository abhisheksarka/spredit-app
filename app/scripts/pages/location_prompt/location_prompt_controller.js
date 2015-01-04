(function() {
  function Controller($scope, Session, $location){
    function init() {

    };
    
    init();
  };
  angular.module('ms.pages.locationPrompt').controller('LocationPromptController', [
    '$scope',
    'SessionModel', 
    '$location',
    Controller
  ]);
}());