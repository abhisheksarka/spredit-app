(function(){
  function Controller($scope, $rootScope, Spread){
    function init() {
      $scope.type = $scope.type || 'Post';
      $scope.callback = $scope.callback || angular.noop;

      $scope.spread = new Spread({
        spreadable_type: $scope.type,
        spreadable_id: $scope.spreadable.id
      });

      $scope.containIt = containIt;
      $scope.spreadIt = spreadIt;
    };

    function spreadIt() {
      save('spread');
    };

    function containIt() {
      save('contain');
    };

    function save(type) {
      $scope.spread.action = type;
      $scope.spread.$save().then(function(response){
        broadcast(response, type);
      }, function(response, status, headers, config) {
        broadcast(response, type);
      });
    };

    function broadcast(response, type) {
      $rootScope.$broadcast('event.spreader.action', type, response);
    };

    init();
  };

  angular.module('ms.components.spreader')
  .controller('SpreaderController', [
    '$scope',  
    '$rootScope',
    'SpreadModel',
    Controller 
  ]);
}());