(function(){
  function Factory($resource, $q){
    var Resource = $resource(
                    ms.apiFor('/sessions'),
                    { }
                  ),
        res = Resource,
        proto = res.prototype,
        currentToken = null,
        currentUser = null;

    //
    // Instance methods and class methods go here
    //
    res.signIn = function(authResponse) {
      var defer = $q.defer();
      res.save(authResponse).$promise.then(function(response){
        // set the current token
        res.setCurrentToken({
          id: response.id,
          value: response.value
        });

        // set the current user
        res.setCurrentUser(response.jw_tokenable);
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
      return res.getCurrentUser() ? true : false;
    };

    res.setCurrentToken = function(token) {
      currentToken = token;
    };

    res.getCurrentToken = function() {
      return currentToken;
    };

    res.setCurrentUser = function(user) {
      currentUser = user;
    };

    res.getCurrentUser = function() {
      return currentUser;
    };

    return res;
  };

  angular.module('ms.core.api')
  .factory('SessionModel', ['$resource', '$q', Factory]);

}());