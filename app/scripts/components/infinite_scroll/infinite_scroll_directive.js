(function(){
  function Directive($window, _, $timeout){
    return{
      scope: {
        resource: '=',
        requestTo: '=',
        withParams: '=?',
        pushTo: '=',
        debounceWait: '=?',
        control: '=?',
        uniq: '=?',
        paginator: '=?'
      },
      controller: 'InfiniteScrollController',
      link: function($scope, $element, $attributes) {
        var d = angular.element(document),
            w = angular.element($window),
            debounceWait = parseInt($attributes.debounceWait || 100);  
        
        // on scrolling send future requests
        var onScrolled = _.debounce(function(e) {
          var yLeftToGo = d.height() - ($window.pageYOffset + $window.innerHeight);  
          if(yLeftToGo <= 100 && !$scope.paginator.state.isWorking) {
            $scope.paginator.paginate();
            $scope.$apply();       
          };
        }, debounceWait);

        w.scroll(onScrolled);
        $scope.$on('$destroy', function() {
          w.unbind('scroll', onScrolled);
        });
      }
    }; 
  };
  angular
  .module('ms.components.infiniteScroll')
  .directive('msInfiniteScroll', [
    '$window',
    'UnderscoreService',
    '$timeout',
    Directive
  ]); 
}());
