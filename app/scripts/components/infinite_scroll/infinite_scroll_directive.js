(function(){
  function Directive($window, _, $timeout){
    return{
      scope: {
        resource: '=',
        requestTo: '=',
        withParams: '=?',
        pushTo: '=',
        debounceWait: '=?',
        uniq: '=?',
        paginator: '=?',
        paginationType: '=?'
      },
      controller: 'InfiniteScrollController',
      link: function($scope, $element, $attributes) {
        if($scope.paginationType == $scope.paginationTypes.LOAD_MORE) {
          return;
        };
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
