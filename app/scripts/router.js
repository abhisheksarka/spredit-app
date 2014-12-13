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
}])

.run([ 
  "SessionModel", 
  "$location", 
  "$rootScope", 
  function(Session, $location, $rootScope) {
  // on module run, check if a session exists
  // if it does make login page inaccessible
  // if not make other routes inaccessible
  $rootScope.$on('$routeChangeStart', function(event){
    if(!Session.isSignedIn()){
      event.preventDefault();
      $location.path('/index');
    } else {
      if($location.path() == "/index"){
        $location.path("/home");
      };
    };
  }); 
}]);
