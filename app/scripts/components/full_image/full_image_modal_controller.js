(function(){
  function Controller($scope, imageUrl){
    
    function init() {
      $scope.imageUrl = imageUrl;
    };

    init();
  };

  angular.module('ms.components.fullImage')
  .controller('FullImageModalController', [
    '$scope',  
    'imageUrl',
    Controller 
  ]);
}());
