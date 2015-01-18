(function(){
  function Controller($scope, $location, Location, Session, StateHandler, MapStyles){
    function init() {
      $scope.location = Session.currentUser.location;  
      $scope.map = {
        center: { },
        zoom: 10,
        options: {
          scrollwheel: false,
          panControl: false,
          mapTypeControl: false,
          scaleControl: false,
          rotateControl: false,
          streetViewControl: false,
          zoomControl: false,
          styles: MapStyles.paleDawn
        },
        refresh: false
      };   
      setCoords();
    };

    function setCoords() {
      var center = $scope.map.center,
          location = $scope.location;

      center.latitude = location.latitude;
      center.longitude = location.longitude;
    };

    $scope.$watch(function(){
      return $scope.location.latitude;
    }, function(nv, ov){
      if(nv != ov){
        setCoords();
        $scope.map.refresh = false;
      } else {
        $scope.map.refresh = false;
      }
    });
    init();
  };
  
  angular.module('ms.components.locator.slider')
  .controller('LocatorMapController', [
    '$scope', 
    '$location', 
    'LocationModel', 
    'SessionModel',
    'StateHandlerService',
    'MapStylesService',
    Controller 
  ]);
}());
