(function(){
  function Directive($window){
    return{
      scope: {
        msInfinteScroll: '=?'
      },
      link: function($scope, $element, $attributes) {
        var d = angular.element(document),
            w = angular.element($window);
        w.scroll(OnScroll);

        function OnScroll(e) {
          var yLeftToGo = d.height() - ($window.pageYOffset + $window.innerHeight);  
          if(yLeftToGo <= 0) {
            $scope.msInfiniteScroll();       
          };
        };

        $scope.$on('$destroy', function() {
          w.unbind('scroll', OnScroll);
        });
      }
    }; 
  };
  angular
  .module('ms.core.directives')
  .directive('msInfiniteScroll', [
    '$window',
    Directive
  ]); 
}());
