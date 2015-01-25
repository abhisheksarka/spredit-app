(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/views/:id'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('ViewModel',[
    '$resource',
    factory
  ])
}());