(function(){
  function Controller($scope, Spread){
    function init() {
      $scope.type = $scope.type || 'Post';
      $scope.callback = $scope.callback || angular.noop;

      $scope.spread = new Spread({
        spreadable_type: $scope.type,
        spreadable_id: $scope.spreadable.id
      });

      $scope.contain = contain;
      $scope.spread = spread;
    };

    function spread() {
      save('spread');
    };

    function contain() {
      save('contain');
    };

    function save(type) {
      $scope.spread.action = type;
      $scope.spread.$save().then(function(response){
        $scope.callback({response: response});
      }, function(response, status, headers, config) {
        $scope.callback({response: response});
      });
    };

    init();
  };

  angular.module('ms.components.spreader')
  .controller('SpreaderController', [
    '$scope',  
    'SpreadModel',
    Controller 
  ]);
}());
