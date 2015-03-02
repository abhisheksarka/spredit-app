(function(){
  function Controller($scope, Paginator){
    function init() {
      setPaginator();
      // send the first request
      $scope.paginator.paginate();
    };

    function setPaginator() {
      $scope.paginator = Paginator.getInstance($scope.resource)
        .requestTo($scope.requestTo)
        .withParams($scope.withParams)
        .pushTo($scope.pushTo)
        .uniq($scope.uniq);
    };

    init();
  };

  angular.module('ms.components.infiniteScroll')
  .controller('InfiniteScrollController', [
    '$scope',  
    'PaginatorService',
    Controller 
  ]);
}());
