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
  .module('ms.core.services')
  .directive('msSectionScroll', [
    '$window',
    Directive
  ]); 
}());
