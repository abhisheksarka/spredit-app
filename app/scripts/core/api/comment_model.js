(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/comments'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('CommentModel',[
    '$resource',
    factory
  ])
}());