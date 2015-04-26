(function(){
  var module = angular.module('ms.core.api');
  module.factory('ConfigPostCategoryModel', [ '$resource',
    function ($resource) {
      var Resource = $resource(
                      ms.apiFor('/configuration/post_categories/:id'),
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