angular.module('ms')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/scripts/pages/index/template.html',
    controller: 'IndexController'
  })
  .when('/home', {
    templateUrl: 'app/scripts/pages/home/template.html',
    controller: 'HomeController'
  })
  .when('/location_prompt', {
    templateUrl: 'app/scripts/pages/location_prompt/template.html',
    controller: 'LocationPromptController'
  })
  .when('/current_location', {
    templateUrl: 'app/scripts/pages/current_location/template.html',
    controller: 'CurrentLocationController'
  })
  .when('/me', {
    templateUrl: 'app/scripts/pages/me/template.html',
    controller: 'MeController'
  })
  .otherwise({
    redirectTo: '/',
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
      $location.path('/');
    } else {
      // restrict the sign in path after logging in
      if($location.path() == '/'){
        $location.path('/home');
      };
      // if the user does not have a valid location
      // redirect the user to the location prompt
      if(!new Location(Session.currentUser.location).isValid()) {
        $location.path('/location_prompt')
      } else {
        if($location.path() == '/location_prompt') {
          $location.path('/home');
        }
      }
    };
  }); 
}]);
