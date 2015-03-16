(function(){
  function Factory($resource, $q, $window, User, $cookie){
    var Resource = $resource(
                    ms.apiFor('/sessions'),
                    { },
                    {
                      current: { method: 'GET', isArray: false, url: ms.apiFor('/sessions/current') }
                    }
                  ),
        res = Resource,
        proto = res.prototype;

        res.currentToken = null;
        res.currentUser = null;

    //
    // Instance methods and class methods go here
    //
    res.signIn = function(authResponse) {
      var defer = $q.defer();
      res.save(authResponse).$promise.then(function(response){
        
        res.setAuthProperties(response);
        
        // resolve the promise

        defer.resolve(response);
      }, function(){
        defer.reject()
      });
      return defer.promise;
    };

    res.signOut = function() {
      delete $cookie.jwToken;
    };
    
    res.isSignedIn = function() {
      return res.currentUser ? true : false;
    };

    res.setAuthProperties = function(response) {
      // set the current token
      res.currentToken = {
        id: response.id,
        value: response.value
      };

      // set the current user
      res.currentUser = User.getInstance(response.jw_tokenable);

      // set the token in the cookie
      $cookie.jwToken = res.currentToken.value;
    }

    return res;
  };

  angular.module('ms.core.api')
  .factory('SessionModel', [
    '$resource', 
    '$q', 
    '$window', 
    'UserModel',
    '$cookies',
    Factory
  ]);

}());