(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/posts/:id'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('PostModel',[
    '$resource',
    factory
  ])
}());