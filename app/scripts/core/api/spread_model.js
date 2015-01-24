(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/spreads/:id'),
                    { id: '@id' },
                    {
                      publishers: { method: 'GET', isArray: true, url: ms.apiFor('/spreads/publishers') }
                    }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('SpreadModel',[
    '$resource',
    factory
  ])
}());