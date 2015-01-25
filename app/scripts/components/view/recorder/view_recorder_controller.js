(function(){
  function Controller($scope, $rootScope, View){
    function init() {
      new View({
        viewable_type: $scope.viewableType,
        viewable_id: $scope.viewable.id
      }).$save();
    };
    
    $scope.$watch('viewable.id', function(nv, ov){
      if(nv) { init(); }
    });
  };

  angular.module('ms.components.spread.creator')
  .controller('ViewRecorderController', [
    '$scope',  
    '$rootScope',
    'ViewModel',
    Controller 
  ]);
}());
