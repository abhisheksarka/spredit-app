angular.module('ms')

.config(['$routeProvider', function($routeProvider) {
  // route resolutions
  var resolutions = {
    currentUser: ['SessionModel', function(Session) {
      return Session.resolveCurrentUser();
    }],
    noCurrentUser: ['SessionModel', '$q', function(Session, $q) {
      var defer = $q.defer();
      Session.resolveCurrentUser().then(function() {
        defer.reject();
      }, function() {
        defer.resolve();
      });  
      return defer.promise;
    }],
    currentPost: ['PostModel', '$route', function(Post, $route) {
      return Post.get({
        id: $route.current.params.id
      });
    }],
    currentUserLocation: [ ]
  };

  // route declarations
  $routeProvider
  
  .when('/', {
    templateUrl: 'app/scripts/pages/index/template.html',
    controller: 'IndexController',
    resolve: {
      currentUser: resolutions.noCurrentUser
    }
  })
  
  .when('/location_prompt', {
    templateUrl: 'app/scripts/pages/location_prompt/template.html',
    controller: 'LocationPromptController',
    resolve: {
      currentUser: resolutions.currentUser
    }
  })
  
  .when('/home', {
    templateUrl: 'app/scripts/pages/home/template.html',
    controller: 'HomeController',
    resolve: {
      currentUser: resolutions.currentUser
    }
  })
  
  .when('/current_location', {
    templateUrl: 'app/scripts/pages/current_location/template.html',
    controller: 'CurrentLocationController',
    resolve: {
      currentUser: resolutions.currentUser
    }
  })
  
  .when('/me', {
    templateUrl: 'app/scripts/pages/me/template.html',
    controller: 'MeController',
    resolve: {
      currentUser: resolutions.currentUser
    }
  })
  
  .when('/notifications', {
    templateUrl: 'app/scripts/pages/notifications/template.html',
    controller: 'NotificationsController',
    resolve: {
      currentUser: resolutions.currentUser
    }
  })

  .when('/posts/:id', {
    templateUrl: 'app/scripts/pages/posts/show/template.html',
    controller: 'PostsShowController',
    resolve: {
      post: resolutions.currentPost,
      currentUser: resolutions.currentUser
    }
  })
  
  .otherwise({
    redirectTo: '/',
  })
}])
.run([
  '$location', 
  '$rootScope', 
  'SessionModel',
  function($location, $rootScope, Session){
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if(!Session.isSignedIn()) {
        event.preventDefault();
        $location.path('/');
      } else {
        if($location.path() == '/') {
          $location.path('/home');
        };
      }; 
    });
  }
]);
