(function(){
  function Controller($scope, Location, MapConfig){
    function init() { 
      $scope.locations = Location.query({
        locatable_type: 'Propagation',
        locatable_id: $scope.post.propagation.id
      });
      $scope.locations.$promise.then(afterLoad);
      $scope.map = {
        zoom: 4,
        bounds: { },
        center: { },
        init: false,
        options: MapConfig.default('grayScale')
      };
    };

    function afterLoad() {
      setMap();
      setIcons();
    };

    function setMap() {
      $scope.map.center = angular.copy($scope.locations[0]); 
      $scope.map.init = true;
    };

    function setIcons() {
      angular.forEach($scope.locations, function(l) {
        l.iconUrl = '../images/marker_red_40.png';
      });
      $scope.locations[0].iconUrl = '../images/marker_green_40.png';
    };

    $scope.$watch('post.id', function() {
      init();
    });
  };

  angular.module('ms.components.propagation')
  .controller('PropagationController', [
    '$scope', 
    'LocationModel', 
    'MapConfigService',
    Controller 
  ]);
}());
