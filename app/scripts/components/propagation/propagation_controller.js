(function(){
  function Controller($scope, Location, MapStyles){
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
        options: {
          scrollwheel: false,
          panControl: false,
          mapTypeControl: false,
          scaleControl: false,
          rotateControl: false,
          streetViewControl: false,
          zoomControl: false,
          styles: MapStyles.paleDawn
        }
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
    'MapStylesService',
    Controller 
  ]);
}());
