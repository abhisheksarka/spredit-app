(function(){
  function Controller($scope, Session, Spread){
    function init() {
      $scope.spreads = Spread.publishers({
        spreadable_type: 'Post',
        spreadable_id: $scope.spreadable.id
      });
    };

    $scope.$watch('spreadable.id', function(nv) {
      init();
    });
  };

  angular.module('ms.components.spread.lister')
  .controller('SpreadListerController', [
    '$scope',  
    'SessionModel',
    'SpreadModel',
    Controller 
  ]);
}());
