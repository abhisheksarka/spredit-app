(function(){
  function Factory($resource, $q, $window){
    var Resource = $resource(
                    ms.apiFor('/sessions'),
                    { }
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
        // set the current token
        res.currentToken = {
          id: response.id,
          value: response.value
        };

        // set the current user
        res.currentUser = response.jw_tokenable;

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
      return res.currentUser ? true : false;
    };

    return res;
  };

  angular.module('ms.core.api')
  .factory('SessionModel', ['$resource', '$q', '$window', Factory]);

}());