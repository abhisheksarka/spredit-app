(function(){
  function Controller($scope){
    function init() { };
    
    $scope.$watch('post.id', function(nv, ov){
      if(nv) { init(); }
    });
  };

  angular.module('ms.components.statistics')
  .controller('StatisticsController', [
    '$scope',  
    Controller 
  ]);
}());
