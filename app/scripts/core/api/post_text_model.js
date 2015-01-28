(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/post_texts/:id'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype,
        res = Resource;

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('PostTextModel',[
    '$resource',
    factory
  ])
}());