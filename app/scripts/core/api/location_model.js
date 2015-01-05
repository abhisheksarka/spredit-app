(function(){
  function Factory($resource, $q, $window, $timeout){
    var Resource = $resource(ms.apiFor('/locations/:id'), { id: '@id' },
                   {
                    'update': { method: 'PUT' }
                   }),
        res = Resource,
        proto = res.prototype;
    //
    // Instance methods and class methods go here
    //
    proto.isValid = function() {
      var self = this;
      return true? (self && self.latitude && self.longitude) : false;
    };

    proto.$saveOrUpdate = function() {
      if(this.id) {
        return this.$update();
      };
      return this.$save();
    };

    res.geolocate = function() {
      var deferred = $q.defer(),
          navigator = $window.navigator,
          geo = navigator.geolocation,
          timeoutValue = 15000,
          error = {
            NOT_SUPPORTED: 0,
            PERMISSION_DENIED: 1, 
            POSITION_UNAVAILABLE: 2, 
            TIMEOUT: 3
          };

      if(geo) {
        geo.getCurrentPosition(function(position){
          deferred.resolve(position);
        }, function(error){
          deferred.reject(error);
        });
      } else {
        error.code = 0;
        error.message = 'Your device does not support geolocation';
        deferred.reject(error);
      };

      // set a default timeout Value
      $timeout(function(){
        error.code = 3;
        error.message = 'Request timed out';
        deferred.reject(error);
      }, timeoutValue);

      return deferred.promise;
    };

    return res;
  };

  angular.module('ms.core.api')
  .factory('LocationModel', [
    '$resource', 
    '$q',
    '$window',
    '$timeout',
    Factory
  ]);

}());