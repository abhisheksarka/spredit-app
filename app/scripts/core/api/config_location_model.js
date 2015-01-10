(function(){
  var module = angular.module('ms.core.api');
  module.factory('ConfigLocationModel', [ '$resource',
    function ($resource) {
      var Resource = $resource(
                      ms.apiFor('/configuration/locations/:id'),
                      { id: '@id' },
                      {
                        update: { method: 'PUT' }
                      }
                    ),
          proto = Resource.prototype;

      //
      // Instance methods and class methods go here
      //

      return Resource;
    }
  ]);
}());