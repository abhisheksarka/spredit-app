angular.module('ms')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/scripts/pages/home/template.html',
    controller: 'HomeController'
  })
  .when('/index', {
    templateUrl: 'app/scripts/pages/index/template.html',
    controller: 'IndexController'
  })
  .when('/location_prompt', {
    templateUrl: 'app/scripts/pages/location_prompt/template.html',
    controller: 'LocationPromptController'
  })
  .otherwise({
    redirectTo: '/index',
  });
}])

.run([ 
  'SessionModel', 
  'LocationModel',
  '$location', 
  '$rootScope', 
  function(Session, Location, $location, $rootScope) {
  // on module run, check if a session exists
  // if it does make login page inaccessible
  // if not make other routes inaccessible
  $rootScope.$on('$routeChangeStart', function(event){
    if(!Session.isSignedIn()){
      event.preventDefault();
      $location.path('/index');
    } else {
      // restrict the sign in path after logging in
      if($location.path() == '/index'){
        $location.path('/home');
      };
      // if the user does not have a valid location
      // redirect the user to the location prompt
      if(!new Location(Session.currentUser.location).isValid()) {
        $location.path('/location_prompt')
      };
    };
  }); 
}]);
