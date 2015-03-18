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
      
    };
    
    res.isSignedIn = function() {
      if($cookie.jwToken) {
        return true;
      };
      res.unsetAuthProperties();
      return false;
    };

    res.unsetAuthProperties = function() {
      delete $cookie.jwToken;
      res.currentToken = null;
      res.currentUser = null;
    };

    res.setAuthProperties = function(response) {
      // set the current token
      if(!response.id) { return; };
      res.currentToken = {
        id: response.id,
        value: response.value
      };

      // set the current user
      res.currentUser = User.getInstance(response.jw_tokenable);

      // set the token in the cookie
      $cookie.jwToken = res.currentToken.value;
    };

    res.resolveCurrentUser = function () {
      var defered = $q.defer();
      // if the user is already signed in 
      // resolve the promise
      // if not do a manual resolve
      res.isSignedIn() ? defered.resolve() : resolve();
      // get the current user from the server
      // and resolve the promise
      function resolve () {
        res.current().$promise
        .then(function(response) { res.setAuthProperties(response); })
        .finally(function() { res.isSignedIn() ? defered.resolve() : defered.reject(); });
      };

      return defered.promise;
    };

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