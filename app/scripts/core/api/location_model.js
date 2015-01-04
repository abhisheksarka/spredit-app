(function(){
  function Factory($resource){
    var Resource = $resource(ms.apiFor('/locations/:id/'), {id: '@id'}),
        res = Resource,
        proto = res.prototype;
    //
    // Instance methods and class methods go here
    //
    proto.isValid = function() {
      var self = this;
      return true? (self && self.latitude && self.longitude && self.id) : false;
    };

    return res;
  };

  angular.module('ms.core.api')
  .factory('LocationModel', ['$resource', Factory]);

}());