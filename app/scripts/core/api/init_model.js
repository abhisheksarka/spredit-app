(function(){
  var module = angular.module('ms.core.api');
  module.factory('InitModel', [ '$resource',
    function ($resource) {
      var Resource = $resource(
                      ms.apiFor('/init'),
                      { }
                    ),
          proto = Resource.prototype;

      //
      // Instance methods and class methods go here
      //

      return Resource;
    }
  ]);
}());