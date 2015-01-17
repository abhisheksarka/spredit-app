(function(){
  function Controller($scope, Location){
    function init() { 
      $scope.locations = Location.query({
        locatable_type: 'Post',
        locatable_id: $scope.post.id
      });
      $scope.locations.$promise.then(setMap);
      $scope.map = {
        zoom: 10,
        options: {
          scrollwheel: false
        }
      };
    };

    function setMap() {
      $scope.map.center = $scope.locations[0]; 
    };

    $scope.$watch('post.id', function(){
      init();
    });
  };

  angular.module('ms.components.propagation')
  .controller('PropagationController', [
    '$scope', 
    'LocationModel', 
    Controller 
  ]);
}());
