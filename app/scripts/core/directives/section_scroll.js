(function(){
  function Directive($window){
    return{
      scope: {
        msSectionScroll: '='
      },
      link: function($scope, $element, $attributes) {
        angular.element($window).scroll(function(e) {
          e.preventDefault();
        });  
      }
    }; 
  };
  angular
  .module('ms.core.directives')
  .directive('msSectionScroll', [
    '$window',
    Directive
  ]); 
}());
