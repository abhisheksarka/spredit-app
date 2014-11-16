angular.module("ms")
.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/scripts/pages/home/template.html',
    controller: 'HomeController'
  })
  .when('/index', {
    templateUrl: 'app/scripts/pages/index/template.html',
    controller: 'IndexController'
  })
  .otherwise({
    redirectTo: '/index',
  });
}]);
