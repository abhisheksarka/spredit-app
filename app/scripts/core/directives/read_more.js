(function(){
  function Directive($sanitize){
    return{
      replace: true,
      link: function($scope, $element, $attributes) {
        $scope.$watch('msReadMore', function(nv, ov) {
          if(nv) {
              
          };
        });
      }
    }; 
  };
  angular
  .module('ms.core.services')
  .directive('msReadMore', [
    '$sanitize',
    Directive
  ]); 
}());
