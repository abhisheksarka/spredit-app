(function(){
  function Controller($scope, Location, MapConfig){
    function init() { 
      $scope.locations = Location.query({
        locatable_type: 'Post',
        locatable_id: $scope.post.id
      });
      $scope.locations.$promise.then(setMap);
      $scope.map = {
        zoom: 4,
        bounds: { },
        center: { },
        init: false,
        options: MapConfig.default
      };
    };

    function setMap() {
      $scope.map.center = angular.copy($scope.locations[0]); 
      $scope.map.init = true;
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
