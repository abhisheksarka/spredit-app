(function(){
  function factory($resource, Location, ConfigLocation) {
    var Resource = $resource(
                    ms.apiFor('/users'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //
    Resource.getInstance = function(ob) {
      var user = new Resource(ob);
      ob.location = ob.location || { };
      ob.location_configuration = ob.location_configuration || { };

      user.location = new Location(ob.location);
      user.location_configuration = new ConfigLocation(ob.location_configuration);
      return user;
    };

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('UserModel',[
    '$resource',
    'LocationModel',
    'ConfigLocationModel',
    factory
  ])
}());