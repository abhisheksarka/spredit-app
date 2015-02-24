(function(){
  function Directive($window){
    return{
      scope: {
        msAutoHeight: '=?' 
      },
      link: function($scope, $element, $attributes) {
        var offset = parseInt($attributes.offset || 0),
            minHeight = parseInt($attributes.minHeight || 99999);

        function setHeight() {
          var height = ($window.innerHeight - offset);
          if(height < minHeight) {
            height = minHeight;
          };
          height = height + 'px';
          $element.css({ height: height });
        };
        
        angular.element($window).resize(setHeight);
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
