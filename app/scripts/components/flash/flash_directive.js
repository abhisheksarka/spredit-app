(function(){
  var app = angular.module('ms.components.flash');
  app.directive('msFlash', ['$timeout', function($timeout){
    return{
      scope: { },
      controllerAs: 'flashCtrl',
      replace: true,
      templateUrl: 'app/scripts/components/flash/template.html',
      controller: 'FlashController',
      link: function($scope, $element, $attributes) {
        var $copy = $element,
            $body = angular.element('body');
        $timeout(function(){
          $element.remove();
          $body.append($copy);
        });
      }
    }; 
  }]); 

}());
