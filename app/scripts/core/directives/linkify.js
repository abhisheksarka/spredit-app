(function(){
  function Directive($sanitize){
    return{
      scope: {
        msLinkify: '=' 
      },
      replace: true,
      link: function($scope, $element, $attributes) {
        $scope.$watch('msLinkify', function(nv, ov) {
          if(nv) {
            $element.html($sanitize(Autolinker.link(nv)));
          };
        });
      }
    }; 
  };
  angular
  .module('ms.core.services')
  .directive('msLinkify', [
    '$sanitize',
    Directive
  ]); 
}());
