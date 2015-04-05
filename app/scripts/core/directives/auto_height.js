(function(){
  function Directive($window){
    return{
      scope: {
        msAutoHeight: '=?' 
      },
      link: function($scope, $element, $attributes) {
        var offset = parseInt($attributes.offset || 0),
            minHeight = parseInt($attributes.minHeight || 99999),
            responsive = $attributes.responsive;

        function setHeight() {
          
          var height = ($window.innerHeight - offset);
          if(height < minHeight) {
            height = minHeight;
          };
          $scope.msAutoHeight = height;
          height = height + 'px';

          if (!window.matchMedia('(min-width: 768px)').matches && responsive) {
            height = "auto"; 
          };
          $element.css({ height: height });
        };
        
        angular.element($window).resize(function() {
          setHeight();
          $scope.$apply();
        });
        setHeight();
      }
    }; 
  };
  angular
  .module('ms.core.services')
  .directive('msAutoHeight', [
    '$window',
    Directive
  ]); 
}());
