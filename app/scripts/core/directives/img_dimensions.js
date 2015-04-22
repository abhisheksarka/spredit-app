(function(){
  function Directive($window){
    return{
      scope: {
        imgHeight: '=?',
        imgWidth: '=?',
        imgLoaded: '=?' 
      },
      link: function($scope, $element, $attributes) {
        $element.load(function() {
          var $this = $(this);

          $scope.imgHeight = $this.height();
          $scope.imgWidth = $this.width();
          $scope.imgLoaded = true;

          $scope.$apply();
        }); 
      }
    }; 
  };
  angular
  .module('ms.core.services')
  .directive('msImgDimensions', [
    '$window',
    Directive
  ]); 
}());
