(function(){
  function Controller($scope, $location, Location, Session, StateHandler){
    function init() {
      $scope.location = Session.currentUser.location;  
      $scope.slider = {
        options: {
          range: 'min'
        },
        value: 15
      }   
    };

    init();
  };
  
  angular.module('ms.components.locator.slider')
  .controller('LocatorSliderController', [
    '$scope', 
    '$location', 
    'LocationModel', 
    'SessionModel',
    'StateHandlerService',
    Controller 
  ]);
}());
