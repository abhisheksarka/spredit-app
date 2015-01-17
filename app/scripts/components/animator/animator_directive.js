(function(){
  var app = angular.module('ms.components.animator');
  app.directive('msAnimator', ['$timeout', function($timeout){
    return{
      link: function($scope, $element, $attributes) {
        var animationClass = $attributes.msAnimator,
            duration = parseInt($attributes.duration) || 300;
        $attributes.$observe('onChangeIn', function(nv, ov) {
          // when the scope property changes
          // add the animation class
          $element.addClass(animationClass);
          $timeout(function(){
            // depending on the duration of the animation
            // remove it when the animtion completes
            $element.removeClass(animationClass);
          }, duration);
        });
      }
    }; 
  }]); 

}());
