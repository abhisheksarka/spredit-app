(function(){
  function Directive($window, $timeout){
    return{
      scope: {
        msFullImage: '='
      },
      controller: 'FullImageController',
      templateUrl: 'app/scripts/components/full_image/template.html',
      link: function($scope, $element, $attributes) {
        
      }
    }; 
  };
  angular
  .module('ms.components.fullImage')
  .directive('msFullImage', [
    '$window',
    '$timeout',
    Directive
  ]); 
}());
