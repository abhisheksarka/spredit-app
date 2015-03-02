(function(){
  function Directive($window, _, Paginator){
    return{
      scope: {
        resource: '=',
        requestTo: '=',
        withParams: '=?',
        pushTo: '=',
        debounceWait: '=?'
      },
      link: function($scope, $element, $attributes) {
        var d = angular.element(document),
            w = angular.element($window),
            debounceWait = parseInt($attributes.debounceWait || 100);

        $scope.paginator = Paginator.getInstance($scope.resource)
                          .requestTo($scope.requestTo)
                          .withParams($scope.withParams)
                          .pushTo($scope.pushTo);
                          
        // send the first request
        $scope.paginator.paginate();

        // on scrolling send future requests
        var onScrolled = _.debounce(function(e) {
          var yLeftToGo = d.height() - ($window.pageYOffset + $window.innerHeight);  
          if(yLeftToGo <= 0) {
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
    'PaginatorService',
    Directive
  ]); 
}());
