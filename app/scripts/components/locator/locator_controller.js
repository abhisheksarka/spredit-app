(function(){
  function Controller($scope, $location, Location, Session, StateHandler){
    function init() {
      $scope.label = $scope.label || 'Share Location'; 
      $scope.successCallback = $scope.successCallback || angular.noop;
      $scope.errorCallback = $scope.errorCallback || angular.noop;

      $scope.geolocate = geolocate;
      $scope.reqState = StateHandler.getInstance(true);   
    };

    function geolocate() {
      $scope.reqState.initiate();
      Location.geolocate().
      then(geolocated, notGeolocated);
    };

    function geolocated(position) {
      var c = Session.currentUser,
          l = c.location || { },
          location = new Location(angular.extend({ id: l.id }, buildParams(position.coords)));
      
      // after geolocation is complete save or update the existing data for the user    
      location.$saveOrUpdate().then(function(response){
        c.location = response;
        $scope.reqState.success();

        // fire the callback so the client of the directive can handle it accordingly 
        $scope.successCallback({response: response});
      }, function(response, status, headers, config){
        // fire the error callback
        $scope.reqState.error();
        $scope.errorCallback({response: response});
      });
    };

    function notGeolocated(error) {
      $scope.reqState.error();
      $scope.errorCallback({response: error});
    };

    function buildParams(coords) {
      var c = Session.currentUser;
      return {
        locatable_type: 'User',
        locatable_id: c.id,
        latitude: coords.latitude,
        longitude: coords.longitude
      };
    };

    init();
  };
  
  angular.module('ms.components.locator')
  .controller('LocatorController', [
    '$scope', 
    '$location', 
    'LocationModel', 
    'SessionModel',
    'StateHandlerService',
    Controller 
  ]);
}());
