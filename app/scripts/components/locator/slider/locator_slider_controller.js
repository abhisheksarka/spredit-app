(function(){
  function Controller($scope, $location, Session, StateHandler){
    function init() {
      var c = Session.currentUser;
      $scope.location = c.location;
      $scope.locationConfig = c.location_configuration;

      $scope.slider = {
        options: {
          range: 'min',
          stop: sliderStop,
        }
      }   
    };

    function sliderStop() {
      $scope.locationConfig.$update();
    };

    init();
  };
  
  angular.module('ms.components.locator.slider')
  .controller('LocatorSliderController', [
    '$scope', 
    '$location', 
    'SessionModel',
    'StateHandlerService',
    Controller 
  ]);
}());
